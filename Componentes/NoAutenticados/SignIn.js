import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';
import {actionLogin} from '../../Store/ACCIONES';

class SignIn extends React.Component {

  signinDeUsuario = (values) => {
    this.props.login(values);
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignInForm login={this.signinDeUsuario}/>
        <Button title='SignUp' onPress={()=>{navigation.navigate('SignUp')}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent:'center',
    paddingHorizontal:16,
  },
});



const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
      login: (datos) => {
        dispatch(actionLogin(datos));
      },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
