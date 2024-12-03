import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "realtime-chat-557e9.firebaseapp.com",
  projectId: "realtime-chat-557e9",
  storageBucket: "realtime-chat-557e9.firebasestorage.app",
  messagingSenderId: "196291505412",
  appId: "1:196291505412:web:170a4701346d9fb0593451",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
