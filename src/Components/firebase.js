import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  // Your firebase credentials
  
  apiKey: "AIzaSyCxoRd2xv2CQZI869JCF9mWLd4BTZuRij0",
  authDomain: "collages-19c48.firebaseapp.com",
  projectId: "collages-19c48",
  storageBucket: "collages-19c48.appspot.com",
  messagingSenderId: "803762296517",
  appId: "1:803762296517:web:cc9c57cb0f94475ea002ac"
  
});

var db = firebaseApp.firestore();

export { db };