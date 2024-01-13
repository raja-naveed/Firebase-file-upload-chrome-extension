chrome.contextMenus.create({
  id: 'fileUploadContextMenu',
  title: 'Upload File',
  contexts: ['all'],
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === 'fileUploadContextMenu') {
    // Perform file upload logic here
    console.log('Uploading file from context menu');
  }
});
