import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class SignIn extends React.Component {

  constructor(){
    super();

  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>SignIn</Text>
        <Button title='SignUp' onPress={()=>{navigation.navigate('SignUp')}}/>
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
