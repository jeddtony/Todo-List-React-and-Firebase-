// import firebase from 'firebase/app';
import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBYM7IJU0Ep2c1XrcJI3_MK37F1MUr2jXk",
    authDomain: "todoist-tut-575c2.firebaseapp.com",
    databaseURL: "https://todoist-tut-575c2.firebaseio.com",
    projectId: "todoist-tut-575c2",
    storageBucket: "todoist-tut-575c2.appspot.com",
    messagingSenderId: "276251019896",
    appId: "1:276251019896:web:9c8c43390f45e37ee0bb8d",
    measurementId: "G-F5EJFXDCCJ"

})

export {firebaseConfig as firebase}