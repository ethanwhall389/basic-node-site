const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile('C:\\Users\\ethan\\OneDrive\\DevEnv\\Projects\\basic-node-site\\index.html', (err) => {
        if (err) {
            next(err);
        } else {
            console.log ('sent file');
        }
    })
})

const PORT = 3000;
app.listen(PORT)