import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD-MpRdW9Fvu3lDXAMgHm9esoTfMw3cF98",
  authDomain: "crwn-db-e051e.firebaseapp.com",
  projectId: "crwn-db-e051e",
  storageBucket: "crwn-db-e051e.appspot.com",
  messagingSenderId: "313862649393",
  appId: "1:313862649393:web:b89aa6f86eb1f08c7c4710",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
