import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { connect } from 'react-redux';
import { autenticacion } from './Store/Servicios/Firebase';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { actionEstablecerSesion, actionCerrarSesion } from './Store/ACCIONES';

const RutaAutenticada = createAppContainer(RutasAutenticadas);
const RutaNoAutenticada = createAppContainer(RutasNoAutenticadas);

class Seleccion extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.autenticacion();
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
      { this.props.usuario? <RutaAutenticada/> : <RutaNoAutenticada/> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = state=> ({
    usuario: state.reducerSesion,
  });

const mapDispatchToProps = (dispatch)=>{
  return {
      autenticacion:()=>{
        //dispatch(actionRegistro(values))
        autenticacion.onAuthStateChanged(function(usuario) {
          if (usuario) {
            dispatch(actionEstablecerSesion(usuario))
          } else {
            dispatch(actionCerrarSesion())
          }
        });
      }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Seleccion);
