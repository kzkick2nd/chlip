// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  var title = tab.title;
  var url = tab.url;
  var clipData = "[" + title + "](" + url + ")";

  var temp = document.getElementById('ex_clip_obj');
  temp.value = clipData;
  temp.select();
  document.execCommand("copy");

});
