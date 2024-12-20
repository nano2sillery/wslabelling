import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCQB_HtLfvWa8Re2wJdqVmxTP1Ejcg61os",
  authDomain: "wslabelling51.firebaseapp.com",
  projectId: "wslabelling51",
  storageBucket: "wslabelling51.firebasestorage.app",
  messagingSenderId: "632974006056",
  appId: "1:632974006056:web:d078882841a3abc485221d",
  measurementId: "G-G0VGYHZLZR"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);