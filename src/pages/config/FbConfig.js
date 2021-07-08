import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBUeSmqrw_AOp29JghLqqm6mOqbDLmvSnQ",
  authDomain: "norma-33eab.firebaseapp.com",
  databaseURL: "https://norma-33eab-default-rtdb.firebaseio.com",
  projectId: "norma-33eab",
  storageBucket: "norma-33eab.appspot.com",
  messagingSenderId: "801919466660",
  appId: "1:801919466660:web:e57aa88f78062e44c1fa31"
};


firebase.initializeApp(firebaseConfig);

export default firebase;