import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {


  //bu alana kendi firebase projenize ait bilgileri girebilirsiniz...
  


};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database=firebase.database();
  const googleAuthProvider=new firebase.auth.GoogleAuthProvider();

export {database as default,googleAuthProvider,firebase}