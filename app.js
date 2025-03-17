const express = require('express');
const path = require('path');

const app = express();

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

// import authorRouter from './routes/authorRouter';
// import bookRouter from './routes/bookRouter';
// import indexRouter from './routes/indexRouter';

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

//error middleware function.
//MUST be placed at the end of all middleware functions in application
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
})


// const options = {
//     root: path.join(__dirname, 'public')
// }

// app.get('/:filename', (req, res) => {
//     const fileName = req.params.filename + '.html';
//     res.sendFile(fileName, options, (err) => {
//         if (err) {
//             res.sendFile('/404.html', options);
//         }
//     })
// })

// app.get('/about', (req, res) => {
//     res.sendFile('/about.html', options);
// })

// app.get('/contact', (req, res) => {
//     res.sendFile('/contact.html', options);
// })

// app.get('*', (req, res) => {
//     res.sendFile('/404.html', options)
// })

const PORT = 3000;
app.listen(PORT)