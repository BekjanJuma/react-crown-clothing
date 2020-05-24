import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA2gVFxdrZZdrZJ-2Sjs3jmzu6dvmHLQx0",
  authDomain: "crown-db-bd79e.firebaseapp.com",
  databaseURL: "https://crown-db-bd79e.firebaseio.com",
  projectId: "crown-db-bd79e",
  storageBucket: "crown-db-bd79e.appspot.com",
  messagingSenderId: "673620730621",
  appId: "1:673620730621:web:92f155369afd9852579494",
  measurementId: "G-85D5878SQM",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
