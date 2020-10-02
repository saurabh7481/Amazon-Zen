import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBj3-G_pxDvwQlEXAMecJYO815_R9f8mVw",
    authDomain: "zen-mart.firebaseapp.com",
    databaseURL: "https://zen-mart.firebaseio.com",
    projectId: "zen-mart",
    storageBucket: "zen-mart.appspot.com",
    messagingSenderId: "1024438325768",
    appId: "1:1024438325768:web:0e26899803bd1e30a737bd",
    measurementId: "G-2HWSRKW26V"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth()

export {db, auth};