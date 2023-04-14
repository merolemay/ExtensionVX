chrome.runtime.sendMessage({action: "enableIcon"});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action == "isEnabled") {
    sendResponse({enabled: true});
  }
});
