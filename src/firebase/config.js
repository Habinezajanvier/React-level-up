import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "dotenv/config";

const { REACT_APP_API_KEY, REACT_APP_API_ID } = process.env;

var firebaseConfig = {
  apiKey: REACT_APP_API_KEY,
  authDomain: "firegram-88a77.firebaseapp.com",
  databaseURL: "https://firegram-88a77.firebaseio.com",
  projectId: "firegram-88a77",
  storageBucket: "firegram-88a77.appspot.com",
  messagingSenderId: "1002695049242",
  appId: REACT_APP_API_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
