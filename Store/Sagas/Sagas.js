import { takeEvery, call, select } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';
import CONSTANTES from '../CONSTANTES';

const registroEnFirebase = (values) =>
        autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({uid, email, nombre, fotoURL}) =>
  baseDeDatos.ref(`usuarios/${uid}`).set({
    nombre,
    email,
    fotoURL,
  });


const loginEnFirebase = ({correo,password}) =>
autenticacion.signInWithEmailAndPassword(correo, password)
.then((success) => success.user.toJSON());


const registroFotoCloudinary = ({imagen}) => {
  const { uri, type } = imagen;
  const splitName = uri.split('/');
  const name = [...splitName].pop();
  const foto = {
    uri,
    type,
    name,
  };

  const formImagen = new FormData();
  formImagen.append('upload_preset', CONSTANTES.CLOUDINARY_PRESET);
  formImagen.append('file', foto);
  return fetch(CONSTANTES.CLOUDINARY_NAME, {
    method: 'POST',
    body: formImagen,
  }).then((response)=> response.json());
};


function* sagaRegistro(values){
  try{
    const imagen = yield select(state => state.reducerImagenSignUp);
    const urlFoto = yield call(registroFotoCloudinary, imagen);
    console.log(urlFoto);
    console.log(urlFoto.secure_url);
    const fotoURL = urlFoto.secure_url;
    const registro = yield call(registroEnFirebase, values.datos);
    const {email, uid } = registro;
    const { datos: { nombre } } = values;
    //uid, email, nombre
    yield call(registroEnBaseDeDatos, {uid, email, nombre, fotoURL});
  }catch(error){
    console.log(error);
  };
}

const escribirFirebase = ({width, height, secure_url, uid}, texto="") => baseDeDatos.ref('publicaciones/')
  .push(
    {
      width,
      height,
      secure_url,
      uid,
      texto,
    }).then(response => response);

    const escribirAutorPublicaciones = ({uid, key}) => baseDeDatos.ref(`autor-publicaciones/${uid}`)
      .update({[key]: true}).then(response => response);

function* sagaSubirPublicacion({values}){
  try{
    const imagen = yield select(state => state.reducerImagenPublicacion);
    const usuario = yield select(state => state.reducerSesion);
    const { uid } = usuario;
    console.log(uid)
    const resultadoImagen = yield call(registroFotoCloudinary, imagen);
    const { width, height, secure_url} = resultadoImagen;
    const parametrosImagen = {
      width,
      height,
      secure_url,
      uid,
    };
    const escribirEnFirebase = yield call(escribirFirebase, parametrosImagen, values.texto);
    const { key } = escribirEnFirebase;
    const parametrosAutorPublicaciones = { uid, key };
    const resultadoEscribirAutorPublicaciones = yield call(escribirAutorPublicaciones, parametrosAutorPublicaciones);
    console.log(resultadoEscribirAutorPublicaciones);
  }catch(error){
    console.log(error);
  }
}



function* sagaLogin(values){

  try{
    console.log(values);
    const resultado = yield call(loginEnFirebase, values.datos);
    console.log(resultado);
  }catch(error){
    console.log(error);
  }
};

export default function* funcionPrimaria(){

  yield takeEvery(CONSTANTES.REGISTRO, sagaRegistro);
  yield takeEvery(CONSTANTES.LOGIN, sagaLogin);
  yield takeEvery(CONSTANTES.SUBIR_PUBLICACION, sagaSubirPublicacion)
  // yield ES6
  console.log('Desde nuestra funcion generadora');
}
