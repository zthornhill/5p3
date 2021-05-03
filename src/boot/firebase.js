import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyAlM6Ft-_uTUkWquwFqZsvCez78RvnzhAM",
  authDomain: "maverick-26624.firebaseapp.com",
  databaseURL: "https://maverick-26624-default-rtdb.firebaseio.com",
  projectId: "maverick-26624",
  storageBucket: "maverick-26624.appspot.com",
  messagingSenderId: "838981103709",
  appId: "1:838981103709:web:1637726b60a384e1b79db4"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }
