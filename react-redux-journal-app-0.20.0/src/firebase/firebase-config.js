import  firebase from 'firebase/app';
import 'firebase/firestore'
import  'firebase/auth';

const firebaseConfig = {
    apiKey:process.env.REACT_APP_FIRE_BASE_API_KEY,
    authDomain:process.env.REACT_APP_FIRE_BASE_AUTHDOMAIN,
    databaseURL:process.env.REACT_APP_FIRE_BASE_DATABASEURL,
    projectId:process.env.REACT_APP_FIRE_BASE_PROJECTID,
    storageBucket:process.env.REACT_APP_FIRE_BASE_STORAGEBUCKET,
    messagingSenderId:process.env.REACT_APP_FIRE_BASE_MESSAGINGSENDERID,
    appId:process.env.REACT_APP_FIRE_BASE_APP_ID,
    measurementId:process.env.REACT_APP_FIRE_BASE_MEASUREMENT_ID
  };
  
  

  const firebaseConfigTest = {
        apiKey: process.env.REACT_APP_FIRE_BASE_API_KEY,
        authDomain: process.env.REACT_APP_FIRE_BASE_AUTHDOMAIN,
        projectId: process.env.REACT_APP_FIRE_BASE_PROJECTID,
        storageBucket: process.env.REACT_APP_FIRE_BASE_STORAGEBUCKET,
        messagingSenderId: process.env.REACT_APP_FIRE_BASE_MESSAGINGSENDERID,
        appId: process.env.REACT_APP_FIRE_BASE_APP_ID,
        measurementId: process.env.REACT_APP_FIRE_BASE_MEASUREMENT_ID
  }

  if(process.env.NODE_ENV === 'test'){
    firebase.initializeApp(firebaseConfigTest);
}else{
   firebase.initializeApp(firebaseConfig);
  }


  // Initialize Firebase

 //para grabar informacion 
 const db = firebase.firestore();
 //para la untentificacion con googel
 const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


 //para usarlos en la app
 export {
     db,
     googleAuthProvider,
     firebase,
 }
