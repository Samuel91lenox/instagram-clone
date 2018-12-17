import { takeEvery, call } from 'redux-saga/effects';
import { autenticacion, baseDeDatos } from '../Servicios/Firebase';

const registroEnFirebase = (values) =>
        autenticacion.createUserWithEmailAndPassword(values.correo, values.password)
        .then(success => success.user.toJSON());

const registroEnBaseDeDatos = ({uid, email, nombre}) =>
  baseDeDatos.ref(`usuarios/${uid}`).set({
    nombre,
    email,
  });


const loginEnFirebase = ({correo,password}) =>
autenticacion.signInWithEmailAndPassword(correo, password)
.then((success) => success.user.toJSON());


function* sagaRegistro(values){
  try{
    const registro = yield call(registroEnFirebase, values.datos);
    const {email, uid } = registro;
    const { datos: { nombre } } = values;
    //uid, email, nombre
    yield call(registroEnBaseDeDatos, {uid, email, nombre});
  }catch(error){
    console.log(error);
  };
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

  yield takeEvery('REGISTRO', sagaRegistro);
  yield takeEvery('LOGIN', sagaLogin);
  // yield ES6
  console.log('Desde nuestra funcion generadora');
}
