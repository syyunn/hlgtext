chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.write(selection[0]); //document.write writes html expressions to a document
    var text = '<form action="https://localhost:8080/example" method="post" id="hlgt_form"><input type="hidden" id = "hlgt" value= ""> </form>';
    document.write(text)
    document.getElementById('hlgt').value = selection[0];
});