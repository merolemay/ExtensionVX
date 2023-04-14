var recording = false;
var currentTabId;

chrome.browserAction.onClicked.addListener(function(tab) {
  currentTabId = tab.id;
});

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.action == 'toggleRecording') {
    recording = !recording;
    if (recording) {
      chrome.browserAction.setIcon({path: 'on.png', tabId: currentTabId});
    } else {
      chrome.browserAction.setIcon({path: 'off.png', tabId: currentTabId});
    }
  }
});
