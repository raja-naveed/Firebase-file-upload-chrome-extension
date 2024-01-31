// Event listener for context menu clicks
chrome.contextMenus.create({
  id: 'fileUploadContextMenu',
  title: 'Upload File',
  contexts: ['all'],
});

// Event listener for context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'fileUploadContextMenu') {
    if (info.srcUrl) {
      // If the user clicked on an image, log its src attribute and send a message to the content script
      console.log('Image Source:', info.srcUrl);
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        chrome.tabs.sendMessage(currentTab.id, { type: 'showToast', message: 'Image link copied!' });
      });
    } else {
      // If the user clicked anywhere else, log the URL and title of the current page and send a message to the content script
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const url = currentTab.url;
        const title = currentTab.title;

        // Log URL and title of the current page
        console.log('URL:', url);
        console.log('Title:', title);

        // Send a message to the content script
        chrome.tabs.sendMessage(currentTab.id, { type: 'showToast', message: 'Page link copied!' });
      });
    }
  }
});
