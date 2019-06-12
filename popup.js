import { GenForm} from "./utils";
import { listen } from "./listen";

GenForm("http://localhost:8080/example");

chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.write(selection[0]); //document.write writes html expressions to a document
    document.getElementById('hlgt').value = selection[0];
});

listen();

document.getElementById('hlgt_form').submit();
