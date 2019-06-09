chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.write(selection[0])
});