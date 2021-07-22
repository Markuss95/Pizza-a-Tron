import firebase from "firebase"

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "pizza-a-tron-df5e4.firebaseapp.com",
  databaseURL:
    "https://pizza-a-tron-df5e4-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pizza-a-tron-df5e4",
  storageBucket: "pizza-a-tron-df5e4.appspot.com",
  messagingSenderId: "435361502043",
  appId: "1:435361502043:web:40fdad24e38794238b807e",
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}
const database = firebase.database()

export { firebase, database as default }
