import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { blur, change } from 'redux-form';
import { actionRegistro,cargarImagenSignUp,limpiarImagenSignUp } from '../../Store/ACCIONES';
import SeleccionarImagen from '../SeleccionarImagen';

class SignUp extends React.Component {

  componentWillUnmount(){
    this.props.limpiarImagen();
  }

  registroDeUsuario = (values) => {
    console.log(values);
    this.props.registro(values);
  };


  render() {
    console.log(this.props.numero);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen}/>
        <SignUpForm registro={this.registroDeUsuario} imagen={this.props.imagen.imagen}/>
        <Button title='SignIn' onPress={()=>{navigation.goBack()}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent:'center',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = (state)=>{
  return {
    numero: state.reducerPrueba,
    imagen: state.reducerImagenSignUp,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    registro:(values)=>{
      dispatch(actionRegistro(values));
    },
    cargarImagen: (imagen)=>{
      dispatch(cargarImagenSignUp(imagen));
      dispatch(blur('SignUpForm','imagen', Date.now()));
    },
    limpiarImagen: ()=>{
      dispatch(limpiarImagenSignUp());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
