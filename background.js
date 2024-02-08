chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'displaySummary') {
      // Update the popup with the received summary
      chrome.browserAction.setBadgeText({ text: '✔' });
      chrome.browserAction.setTitle({ title: 'Video Summarized' });
  
      // For demonstration purposes, log the summary
      console.log('Video Summary:', request.summary);
    }
  });
  