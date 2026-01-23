// Firebase Configuration and Initialization
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
firebase.initializeApp(firebaseConfig);

// Create references to services
const auth = firebase.auth();
const db = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Export references to window to make them globally accessible (since we aren't using modules)
window.auth = auth;
window.db = db;
window.googleProvider = googleProvider;
