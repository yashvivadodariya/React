// Import the functions you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";       // ✅ ADD
import { getFirestore } from "firebase/firestore"; // ✅ ADD

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyClbwdQbBe9fvCE_xtqHfdblGc86lAqaA8",
  authDomain: "movie-994fe.firebaseapp.com",
  projectId: "movie-994fe",
  storageBucket: "movie-994fe.firebasestorage.app",
  messagingSenderId: "293249603693",
  appId: "1:293249603693:web:bc524c81ecccbb85084764",
  measurementId: "G-SJQWKX380F"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ EXPORT AUTH (NOW CORRECT)
export const auth = getAuth(app);

// ✅ EXPORT FIRESTORE (for movies)
const db = getFirestore(app);
export default db;