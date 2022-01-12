import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD2IVukOMH2iLqXPfR-iYYeohvY-sy0Cbs",
    authDomain: "todo-37100.firebaseapp.com",
    projectId: "todo-37100",
    storageBucket: "todo-37100.appspot.com",
    messagingSenderId: "453066078854",
    appId: "1:453066078854:web:b49c8e5b498cd9b1b96f07"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  export { db };