import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyClf4zdriiJt8Qyx2NkGWhGrtaFuDZYf7Q",
  authDomain: "firegram-88a77.firebaseapp.com",
  databaseURL: "https://firegram-88a77.firebaseio.com",
  projectId: "firegram-88a77",
  storageBucket: "firegram-88a77.appspot.com",
  messagingSenderId: "1002695049242",
  appId: "1:1002695049242:web:e69ed2eedf68905b6b11a3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();

export { storage, firestore };
