import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAR0hRe3tSx-Yatr7oUKcNYYyKurUXo_YI",
    authDomain: "extension-c45a8.firebaseapp.com",
    projectId: "extension-c45a8",
    storageBucket: "extension-c45a8.appspot.com",
    messagingSenderId: "572603389739",
    appId: "1:572603389739:web:e0d21992dda2498ca3976e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);