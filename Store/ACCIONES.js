import CONSTANTES from './CONSTANTES';

export const actionRegistro = values=>( {
    type: CONSTANTES.REGISTRO,
    datos: values,
});

export const actionLogin = datos =>({
  type: CONSTANTES.LOGIN,
  datos,
});

export const actionEstablecerSesion = usuario => ({
  type: CONSTANTES.ESTABLECER_SESION,
  usuario,
});

export const actionCerrarSesion = datos => ({
  type: CONSTANTES.CERRAR_SESION,
});

export const cargarImagenSignUp = (imagen) => ({
  type: CONSTANTES.CARGAR_IMAGEN_SIGNUP,
  imagen,
});

export const limpiarImagenSignUp = () => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_SIGNUP,
});

export const actionCargarImagenPublicacion = imagen => ({
  type: CONSTANTES.CARGAR_IMAGEN_PUBLICACION,
  imagen,
});

export const limpiarImagenPublicacion = () => ({
  type: CONSTANTES.LIMPIAR_IMAGEN_PUBLICACION,
});

export const actionSubirPublicacion = values => ({
  type: CONSTANTES.SUBIR_PUBLICACION,
  values,
});
