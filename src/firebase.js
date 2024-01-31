import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAR0hRe3tSx-Yatr7oUKcNYYyKurUXo_YI",
    authDomain: "extension-c45a8.firebaseapp.com",
    projectId: "extension-c45a8",
    storageBucket: "extension-c45a8.appspot.com",
    messagingSenderId: "572603389739",
    appId: "1:572603389739:web:e0d21992dda2498ca3976e"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  
  export { auth, provider, signInWithPopup };