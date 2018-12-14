import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default class Profile extends React.Component {

  constructor(){
    super();

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
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
