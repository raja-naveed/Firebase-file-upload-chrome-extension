
function LoginButton() {
  const handleClick = () => {
    chrome.tabs.create({ url: 'zitransfer.com' }); // Replace 'login.html' with your Firebase login page
  };

  return (
    <button onClick={handleClick}>Login with Firebase</button>
  );
}

export default LoginButton;