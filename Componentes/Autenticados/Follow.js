import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Follow extends React.Component {

  constructor(){
    super();

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Follow</Text>
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
