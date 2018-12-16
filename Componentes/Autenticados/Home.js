import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Home extends React.Component {

  constructor(){
    super();

  }

  render() {
    console.log(this.props.navigation);
    const { navigation } =this.props;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button title='Autor' onPress={()=>{navigation.navigate('Autor')}}/>
        <Button title='Comentarios' onPress={()=>{navigation.navigate('Comentarios')}}/>
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
});
