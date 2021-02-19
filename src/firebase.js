import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCCvSz6NSkMPzmMbt0d90d9SXeJdazGVww",
    authDomain: "seenit-bfe8f.firebaseapp.com",
    databaseURL: "https://seenit-bfe8f-default-rtdb.firebaseio.com",
    projectId: "seenit-bfe8f",
    storageBucket: "seenit-bfe8f.appspot.com",
    messagingSenderId: "636830494102",
    appId: "1:636830494102:web:b51599d4d380e001c701b7",
    measurementId: "G-1FVVW1Q9WY"
  };

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

export {
    database as default
}