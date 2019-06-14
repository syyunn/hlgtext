chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {

    document.write(selection[0]);

    var text =
        '<form action="http://localhost:8080/example" method="POST" id="hlgt_form">' +
        '<input type="hidden" id="hlgt" name="hlgt" value="">' +
        '</form>';

    document.write(text);

    document.getElementById('hlgt').value = selection[0];
    // it stores highlights into value of <input>

    document.getElementById('hlgt_form').submit();
});