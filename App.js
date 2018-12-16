import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { RutasNoAutenticadas } from './Componentes/NoAutenticados/RutasNoAutenticadas';
import { RutasAutenticadas } from './Componentes/Autenticados/RutasAutenticadas';
import { Provider } from 'react-redux';
import Store from './Store/Store';

const RutaNoAutenticada = createAppContainer(RutasNoAutenticadas);
const RutaAutenticada = createAppContainer(RutasAutenticadas);

console.disableYellowBox = ['Remote debugger'];

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      nombre: 'SocialInsta',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <RutaNoAutenticada/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
