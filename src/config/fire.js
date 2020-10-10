import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCRCKngKKGRdBU_0YSvMTHUFZHKkk_KtCk",
  authDomain: "react-login-edec7.firebaseapp.com",
  databaseURL: "https://react-login-edec7.firebaseio.com",
  projectId: "react-login-edec7",
  storageBucket: "react-login-edec7.appspot.com",
  messagingSenderId: "664504556491",
  appId: "1:664504556491:web:61c0e3c3a493e83589f44e",
  measurementId: "G-PG44L4GXGJ",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
