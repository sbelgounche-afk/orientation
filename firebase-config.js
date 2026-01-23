// Firebase Configuration and Initialization (Modular SDK)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBVxtTtimjK6DIrzGbpEv_YRmFoYeW-1Fw",
    authDomain: "orientation-bba46.firebaseapp.com",
    projectId: "orientation-bba46",
    storageBucket: "orientation-bba46.firebasestorage.app",
    messagingSenderId: "361387454948",
    appId: "1:361387454948:web:ee3af5d987610c4f6297f1",
    measurementId: "G-V8TZ8TJ9NX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create references to services
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();

// Export references to window for legacy support and internal use
window.auth = auth;
window.db = db;
window.googleProvider = googleProvider;

export { auth, db, googleProvider };
