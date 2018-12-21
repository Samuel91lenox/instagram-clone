import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import  SeleccionarImagen  from '../SeleccionarImagen';
import SeleccionarGaleriaForm from './SeleccionarGaleriaForm';
import { connect } from 'react-redux';
import { actionCargarImagenPublicacion,actionSubirPublicacion,limpiarImagenPublicacion} from '../../Store/ACCIONES';
import { blur } from 'redux-form';

class SeleccionarGaleria extends React.Component {

  static navigationOptions = {
    tabBarVisible: false,
  };

  componentWillUnmount(){
    this.props.limpiarImagen();
  }

  componentWillReceiveProps(nextProps){
    if(this.props.estadoSubirPublicacion !== nextProps.estadoSubirPublicacion){
      switch (nextProps.estadoSubirPublicacion) {
        case 'EXITO':
        Alert.alert('Exito', 'La publicacion fue realizada correctamente',[{text:'Ok',  onPress=()=> {
          this.props.limpiarEstadoPublicacion();
        } }]);
          this.props.navigation.goBack();
          break;
          case 'ERROR':
            console.log('error');
            break;
        default:
          break;
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.imagen}>
        <SeleccionarImagen imagen={this.props.imagen.imagen} cargar={this.props.cargarImagen} radius/>
      </View>
      <View style={styles.texto}>
        <SeleccionarGaleriaForm imagen={this.props.imagen.imagen} registro={values=>this.props.subirPublicacion(values)}/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagen:{
    flex:2,
  },
  texto:{
    flex:2,
  },
});

const mapStateToProps = state=>({
    imagen: state.reducerImagenPublicacion,
    estadoSubirPublicacion: state.reducerExitoSubirPublicacion.estado,
});

const mapDispatchToProps = dispatch=>({
    cargarImagen:(imagen)=>{
      dispatch(actionCargarImagenPublicacion(imagen));
      dispatch(blur('SeleccionarGaleriaForm','imagen', Date.now()));
    },
    subirPublicacion: (values)=>{
      dispatch(actionSubirPublicacion(values))
    },
    limpiarImagen: () => {
      dispatch(limpiarImagenPublicacion());
    },
    limpiarEstadoPublicacion: () => {
      dispatch(actionLimpiarSubirPublicacion());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SeleccionarGaleria);
