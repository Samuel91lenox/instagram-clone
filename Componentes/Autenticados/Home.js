import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, Dimensions  } from 'react-native';
import { connect } from 'react-redux';
import { actionDescargarPublicaciones } from '../../Store/ACCIONES';
import Publicacion from './Publicacion';

class Home extends React.Component {

  constructor(){
    super();
  }

  componentDidMount(){
    this.props.descargarPublicaciones();
  }

  render() {
    console.log(this.props.publicaciones);
    const { navigation, autores } =this.props;
    return (
      <View style={styles.container}>
        {/* <Text>Home</Text>
        <Button title='Autor' onPress={()=>{navigation.navigate('Autor')}}/>
        <Button title='Comentarios' onPress={()=>{navigation.navigate('Comentarios')}}/> */}
        <FlatList data={this.props.publicaciones} ItemSeparatorComponent={()=><View style={styles.separador}></View>}
          renderItem={({item,index})=><Publicacion autor={autores[index]} item={item} />
        }/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItems:'center',
  },
  separador:{
    borderWidth: 1,
    borderColor: '#C0C0C0'
  }
});

const mapStateToProps = state=>({
    publicaciones: state.reducerPublicacionesDescargadas,
    autores: state.reducerAutoresDescargados,
});

const mapDispatchToProps = (dispatch)=> ({
    descargarPublicaciones: () => {
      dispatch(actionDescargarPublicaciones());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
