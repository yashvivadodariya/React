import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC46BwJjU9sv2J1UuCY38qP0nz1G2wKBEU",
  authDomain: "food-acfe7.firebaseapp.com",
  projectId: "food-acfe7",
  storageBucket: "food-acfe7.firebasestorage.app",
  messagingSenderId: "474608061777",
  appId: "1:474608061777:web:c21336e5de3b98487f5770"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export default db;