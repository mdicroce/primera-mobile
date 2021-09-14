import firebase from 'firebase'

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBRD6MF9W-PQtsyuR6DpVc0Bp0jjyylG8Q",
  authDomain: "primer-proyecto-mobile.firebaseapp.com",
  projectId: "primer-proyecto-mobile",
  storageBucket: "primer-proyecto-mobile.appspot.com",
  messagingSenderId: "405629153959",
  appId: "1:405629153959:web:4907e451faa77855802182"
};

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default{
    firebase,
    db
}