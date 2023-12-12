import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyBAAG6VMlngS2BXGbXwoceeLoZfGFIxjXk",
  authDomain: "sih-1369.firebaseapp.com",
  projectId: "sih-1369",
  storageBucket: "sih-1369.appspot.com",
  messagingSenderId: "781582329970",
  appId: "1:781582329970:web:0bc58b0b56067c040b3aeb",
  measurementId: "G-3X5QNMKY3Z"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);