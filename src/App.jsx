// App.js
import { useState } from 'react';
import LoginButton from './LoginButton';
import Login from './Login';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // Conditionally render the login button or the user information based on the login state
  return (
    <div>
      {loggedIn ? (
        <div>
          {/* Display user information */}
          {/* You can use the user's information to update the extension UI */}
          <h1>Welcome, [User Name]!</h1>
          <img src="[User Profile Picture URL]" alt="Profile" />
        </div>
      ) : (
        <LoginButton />
      )}
      {/* You can also conditionally render the login component here */}
      {!loggedIn && <Login />}
    </div>
  );
}

export default App;
