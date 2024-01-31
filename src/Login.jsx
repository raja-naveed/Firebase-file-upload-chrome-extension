// Login.js
import React from 'react';
import { auth, provider, signInWithPopup } from './firebase';

function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Name:", user.displayName);
      console.log("Profile Picture URL:", user.photoURL);
      // Handle user data (e.g., display name, profile picture)
    } catch (error) {
      // Handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login with Firebase</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default Login;
