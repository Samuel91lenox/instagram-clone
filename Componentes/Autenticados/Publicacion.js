import React from 'react';
import { StyleSheet, Text, View, Button,Dimensions,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default class Publicacion extends React.Component {

  constructor(){
    super();

  }

  render() {
    const { navigation, item, autor } = this.props;
    const { width } = Dimensions.get('window');
    const factor = item.width / width;
    const height = item.height / factor;

    return (
      <View>
        <View style={styles.header}>
          <Image source={{uri:autor.fotoURL}} style={{width: 48, height:48, borderRadius:24}}/>
          <Text>{autor.nombre}</Text>
        </View>
        <Image source={{uri:item.secure_url}} style={{width, height}}/>
      <View style={styles.footer}>
        <View style={styles.iconos}>
          <Ionicons name='ios-heart-empty' color='#28536C' size={30} style={styles.icon}/>
        <Ionicons name='ios-chatbubbles' color='#28536C' size={30} style={styles.icon}/>
        </View>
        <View style={styles.texto}>
          <Text>{item.texto}</Text>
        </View>
        <Text>Comentarios</Text>
        </View>

        {/* <Text>Publicacion</Text>
      <Button title='Autor' onPress={()=>{navigation.navigate('Autor')}}/>
      <Button title='Comentarios' onPress={()=>{navigation.navigate('Comentarios')}}/> */}
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
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginVertical: 16,
  },
  footer:{
    marginHorizontal:16,
  },
  iconos:{
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  icon:{
    marginVertical: 10,
  },
  texto:{
    marginBottom: 16,
  }
});
