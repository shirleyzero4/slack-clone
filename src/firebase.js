import firebase from "./firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAHs0HtD1fnUa_LtMuIK1VAZiIIKXZyxJw",
    authDomain: "slack-clone-36f1a.firebaseapp.com",
    projectId: "slack-clone-36f1a",
    storageBucket: "slack-clone-36f1a.appspot.com",
    messagingSenderId: "547280563797",
    appId: "1:547280563797:web:94db967cd17806e16d2edc",
    measurementId: "G-TRR7NZC55N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
