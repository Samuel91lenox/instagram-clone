import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Field, reduxForm } from 'redux-form';

const fieldNombre = (props)=>{
  console.log(props);
  return (
    <View>
    <TextInput
    placeholder={props.ph}
    onChangeText={props.input.onChange}
    value={props.input.value}
    keyboardType={props.input.name=== 'correo'? 'email-address':'default'}
    autoCapitalize='none'
    secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirmacion')}
    onBlur={props.input.onBlur}
    />
    {props.meta.touched && props.meta.error  && <Text>{props.meta.error}</Text>}
    </View>
  );
};

const validate = (values) => {
  const errors = {};
  if(!values.nombre){
    errors.nombre = 'requerido';
  } else if(values.nombre.length<5){
    errors.nombre = 'deben ser al menos 5 caracteres';
  }else if(values.nombre.length > 10){
    error.nombre = 'debe ser menor de 10 caracteres';
  }

  if(!values.correo){
    errors.correo = 'requerido';
  }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.correo)){
    errors.correo = 'correo invalido';
  }

  if(!values.password){
    errors.password = 'requerido';
  }else if(values.password.length < 5){
    errors.password = 'deben ser al menos 5 caracteres';
  }else if(values.password.length>15){
    errors.password = 'deben ser menos de 15 caracteres';
  }

  if(!values.confirmacion){
    errors.confirmacion = 'requerido';
  }else if(values.confirmacion !== values.password){
    errors.confirmacion = 'el password debe coincidir';
  }

  return errors;
};

const SignUpForm = (props) => {
console.log(props);
  return (
    <View>
      <Field name="nombre" component={ fieldNombre }  ph='nombre'/>
      <Field name="correo" component={ fieldNombre } ph='correo@correo.com'/>
      <Field name="password" component={ fieldNombre } ph='*******'/>
      <Field name="confirmacion" component={ fieldNombre } ph='*******'/>
      <Text>ReduxForm</Text>
      <Button title="Resgistrar" onPress={props.handleSubmit((values)=>{console.log(values)})}/>
    </View>
  );
};

export default reduxForm({
  form: 'SignUpForm',
  validate,
})(SignUpForm);
