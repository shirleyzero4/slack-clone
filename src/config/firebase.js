import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAHs0HtD1fnUa_LtMuIK1VAZiIIKXZyxJw",
    authDomain: "slack-clone-36f1a.firebaseapp.com",
    databaseURL: "https://slack-clone-36f1a-default-rtdb.firebaseio.com",
    projectId: "slack-clone-36f1a",
    storageBucket: "slack-clone-36f1a.appspot.com",
    messagingSenderId: "547280563797",
    appId: "1:547280563797:web:94db967cd17806e16d2edc",
    measurementId: "G-TRR7NZC55N"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);

  export { auth, provider };
  export default db;
