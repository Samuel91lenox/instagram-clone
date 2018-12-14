import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Text, View, Button } from 'react-native';

const SignIn = (props) => {
  console.log('Propiedades stacknavigator'+JSON.stringify(props));
  //props.navigation.navigate();
  const { navigation } = props;
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text>Signin</Text>
      <Button title="Navegar a la SignUp" onPress={()=>{navigation.navigate('SignUp')}}/>
    </View>
    )
};
const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text>SignUp</Text>
      <Button title="Regresar" onPress={()=>{navigation.goBack()}}/>
    </View>
  )
};

const RutasNoAutenticadas = createStackNavigator({
  SignIn: {
    screen: SignIn,
  },
  SignUp: {
    screen: SignUp,
    navigationOptions:{
      title:'SignUp titulo desde la screen',
    },
  },
},
{
  headerMode:'none',
  navigationOptions:{
    title: 'Titulo desde el StackNavigator',
  },
},
);

export { RutasNoAutenticadas };
