chrome.runtime.onInstalled.addListener(() => {
  const color = document.body.style.backgroundColor;
  
});
function reddenPage() {
  const color = document.body.style.backgroundColor;

  document.body.style.backgroundColor = color==="red" ? color:'red';
}

chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: reddenPage
    });
  }
});
