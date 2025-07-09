import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// KWAFI WANNAN DAGA FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyB...123",
  authDomain: "vibemove001.firebaseapp.com",
  projectId: "vibemove001",
  storageBucket: "vibemove001.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123def456"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);