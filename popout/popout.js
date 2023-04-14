document.addEventListener('DOMContentLoaded', function() {
  const toggleRecordingButton = document.getElementById('toggleRecording');
  toggleRecordingButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'toggleRecording'});
  });

  const stopRecordingButton = document.getElementById('stopRecording');
  stopRecordingButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({action: 'stopRecording'});
  });
});
