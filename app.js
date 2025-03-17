const express = require('express');
const path = require('path');

const app = express();

const options = {
    root: path.join(__dirname, 'public')
}

app.get('/:filename', (req, res) => {
    const fileName = req.params.filename + '.html';
    res.sendFile(fileName, options, (err) => {
        if (err) {
            res.sendFile('/404.html', options);
        }
    })
})

// app.get('/about', (req, res) => {
//     res.sendFile('/about.html', options);
// })

// app.get('/contact', (req, res) => {
//     res.sendFile('/contact.html', options);
// })

app.get('*', (req, res) => {
    res.sendFile('/404.html', options)
})

const PORT = 3000;
app.listen(PORT)