// Create context menu item for uploading files
chrome.contextMenus.create({
  id: 'fileUploadContextMenu',
  title: 'Upload File',
  contexts: ['all'],
});

// Event listener for context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'fileUploadContextMenu') {
    if (info.srcUrl) {
      // If the user clicked on an image, log its src attribute
      console.log('Image Source:', info.srcUrl);
    } else {
      // If the user clicked anywhere else, log the URL and title of the current page
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const currentTab = tabs[0];
        const url = currentTab.url;
        const title = currentTab.title;

        // Log URL and title of the current page
        console.log('URL:', url);
        console.log('Title:', title);
      });
    }
  }
});
