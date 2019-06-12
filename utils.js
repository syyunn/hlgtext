export function GenForm(url_path) {
    /** Add html script : <form action=url_path method="POST"> hlgt </form>
     to the provided URL with the specified parameters. */
    const hlgt_text = hlgt

    var form = $('<form></form>');

    form.attr("method", 'listen');
    form.attr("action", url_path);
    form.attr("id", 'hlgt_form');

    var field = $(`<input type="hidden" 
                          id = "hlgt" 
                          value= "">`);
    form.append(field);

    // The form needs to be a part of the document in order for us to be able to submit it to the action destination.
    $(document.body).append(form);
}
