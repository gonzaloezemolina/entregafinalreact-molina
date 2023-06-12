import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCmq3I8SqroQYHTTXe31icSQbTM8w0tos4",
  authDomain: "suplementos-dragonfit.firebaseapp.com",
  projectId: "suplementos-dragonfit",
  storageBucket: "suplementos-dragonfit.appspot.com",
  messagingSenderId: "212812540909",
  appId: "1:212812540909:web:f6fe32abf9c8dc9b1815e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);