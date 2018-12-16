import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class Follow extends React.Component {

  constructor(){
    super();

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Follow</Text>
        <Button title='Autor' onPress={()=>{navigation.navigate('Autor')}}/>
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
