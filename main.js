chrome.contextMenus.create ({
  "title": "Display Card Count",
  "type": "normal",
  "documentUrlPatterns": ["https://trello.com/b*"]
})

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (tab) {
      chrome.tabs.executeScript(tab.id, {file: "display_cards.js"}); 
  }
})

