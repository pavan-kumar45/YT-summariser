chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'summarizeVideo') {
      // Extract information from the YouTube page, process the video content, and send the summary back
      const videoTitle = document.title;
      const videoURL = window.location.href;
      const videoDescription = document.querySelector('meta[name="description"]').getAttribute('content');
      
      // Implement your video summarization logic here
      
      // For demonstration purposes, log the extracted information
      console.log('Title:', videoTitle);
      console.log('URL:', videoURL);
      console.log('Description:', videoDescription);
  
      // Send the summary back to the popup
      chrome.runtime.sendMessage({
        action: 'displaySummary',
        summary: 'Your video summary goes here.'
      });
    }
  });
  