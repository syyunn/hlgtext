const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({ extended: true }));

function listen() {
    app.post('/example', (req,
                          res) => {
        res.send(`hlgt is: ${req.id.hlgt}`);
    });

    app.listen(port, () => {
        console.log(`Server running on port${port}`);
    });
}

listen();