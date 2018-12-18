import React from 'react';
import { Button, Image, View, TouchableOpacity, Alert } from 'react-native';
import { ImagePicker, Permissions } from 'expo';


const SeleccionarImagen = (props)=>{

  const permiso = async () => {
   const response =  await Permissions.getAsync(Permissions.CAMERA_ROLL);
   console.log(response);
   return response;
  };

  const seleccionarImagen = async () => {
      const respuestaPermiso = await permiso();
      if(respuestaPermiso.status === 'undetermined'){
        await Permissions.askAsync(Permissions.CAMERA_ROLL);
      }else if(respuestaPermiso.status === 'denied'){
        Alert.alert(
          'Permisos',
          'Debe desinstalar la app y otorgarle permisos',
          [
            {text: 'Entendido', onPress:()=>{console.log("Entendido...");}}
          ]
        );
      }else if(respuestaPermiso.status === 'granted'){
        let result = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });

        console.log(result);

        if (!result.cancelled) {
          props.cargar(result);
        }
      }

    };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={seleccionarImagen}>

      {
        props.imagen ? (
        <Image source={{uri: props.imagen.uri}} style={{width: 160, height:160, borderRadius:80}}/>
      ):(
        <Image source={require('../assets/imagen.jpg')} style={{width: 160, height:160, borderRadius:80}}/>
      )
    }

      </TouchableOpacity>
    </View>
  );
};

export default SeleccionarImagen;
