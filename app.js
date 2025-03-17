const express = require('express');
const path = require('path');

const app = express();

const options = {
    root: path.join(__dirname, 'public')
}

app.get('/', (req, res) => {
    res.sendFile('/index.html', options)
})

app.get('/about', (req, res) => {
    res.sendFile('/about.html', options);
})

app.get('/contact', (req, res) => {
    res.sendFile('/contact.html', options);
})

app.get('*', (req, res) => {
    res.sendFile('/404.html', options)
})

const PORT = 3000;
app.listen(PORT)