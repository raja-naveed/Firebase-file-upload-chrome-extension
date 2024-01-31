// Listen for messages from the background script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'showToast') {
    // Create and append the toast notification to the page
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message.message;
    document.body.appendChild(toast);

    // Remove the toast after 3 seconds
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }
});

console.log('Content script initialized');
