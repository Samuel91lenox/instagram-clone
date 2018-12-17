import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import SignInForm from './Formas/SignInForm';


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
    backgroundColor: '#90EE90',
    justifyContent:'center',
    paddingHorizontal:16,
  },
});



const mapStateToProps = state => ({
  prop: state.prop,
});

const mapDispatchToProps = dispatch => ({
      login: (datos) => {
        dispatch({ type:'LOGIN', datos });
      },
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
