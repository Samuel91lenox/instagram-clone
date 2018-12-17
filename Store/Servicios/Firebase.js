import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDBGe8ez8k8ozIttcOGyPituvIML6NfUi0",
    authDomain: "clon-instagram-fcd66.firebaseapp.com",
    databaseURL: "https://clon-instagram-fcd66.firebaseio.com",
    projectId: "clon-instagram-fcd66",
    storageBucket: "clon-instagram-fcd66.appspot.com",
    messagingSenderId: "334862716613"
  };
  firebase.initializeApp(config);

  export const autenticacion = firebase.auth();
  export const baseDeDatos = firebase.database();
