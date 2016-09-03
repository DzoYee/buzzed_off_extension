var enable=false;
chrome.browserAction.onClicked.addListener(function (tab) {
 enable = enable ? false : true;
 if(enable){
  //turn on...
  chrome.browserAction.setIcon({ path: 'on.png' });
  //chrome.browserAction.setBadgeText({ text: 'OFF' });
  chrome.browserAction.setBadgeText({ text: '' });
  chrome.tabs.executeScript(null, { file: 'content.js' }); 
 }else{
  //turn off...
  chrome.browserAction.setIcon({ path: 'on.png'});
  chrome.browserAction.setBadgeText({ text: 'OFF' });
 }
});