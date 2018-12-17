import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';
import SignUpForm from './Formas/SignUpForm';
import { actionRegistro } from '../../Store/ACCIONES';

class SignUp extends React.Component {

  registroDeUsuario = (values) => {
    console.log(values);
    this.props.registro(values);
  };


  render() {
    console.log(this.props.numero);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignUpForm registro={this.registroDeUsuario}/>
        <Button title='SignIn' onPress={()=>{navigation.goBack()}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90',
    justifyContent:'center',
    paddingHorizontal: 16,
  },
});

const mapStateToProps = (state)=>{
  return {
    numero: state.reducerPrueba,
  }
};

const mapDispatchToProps = (dispatch)=>{
  return {
    registro:(values)=>{
      dispatch(actionRegistro(values))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
