// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPF-rwVDcWOvXHaQOkxYIwtdq-MAoHZNw",
  authDomain: "to-do-b8dcf.firebaseapp.com",
  projectId: "to-do-b8dcf",
  storageBucket: "to-do-b8dcf.appspot.com",
  messagingSenderId: "84131329077",
  appId: "1:84131329077:web:c2cec45fdabfb41bed6d7c",
  measurementId: "G-1ZE63ZSFF8",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Export firestore database
// It will be imported into your react app whenever it is needed
const db = getFirestore(firebaseApp);

export { firebaseApp, db };
