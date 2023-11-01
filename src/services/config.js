import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3yJldnuUHaznBHUyjdpj9bqeGhlzXYlU",
  authDomain: "publicidad-9fc27.firebaseapp.com",
  projectId: "publicidad-9fc27",
  storageBucket: "publicidad-9fc27.appspot.com",
  messagingSenderId: "132884486703",
  appId: "1:132884486703:web:365ba3543e14bd843d84da",
  measurementId: "G-JEG97464Q0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)