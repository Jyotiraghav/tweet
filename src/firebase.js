import firebase from "./firebase";
import { firebaseApp } from "./firebase";
//import {firestore} from "firebase/firestore";
import {db} from "firebase/firestore";


const firebaseConfig = {

    apiKey: "AIzaSyDxuG8-gXFShWuJPzuJO7ypD0UVhUXk9JQ",
  
    authDomain: "twitter-clone-f663f.firebaseapp.com",
  
    projectId: "twitter-clone-f663f",
  
    storageBucket: "twitter-clone-f663f.appspot.com",
  
    messagingSenderId: "682687151862",
  
    appId: "1:682687151862:web:ea40b9b7f7679a35e576d7",
  
    measurementId: "G-7W6WQJ53SD",

    databaseURL: "https://twitter-clone-f663f-default-rtdb.firebaseio.com"

  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  export default db;


  