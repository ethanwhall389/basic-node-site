const express = require('express');
const path = require('path');

const authorRouter = require('./routes/authorRouter');
const bookRouter = require('./routes/bookRouter');
const indexRouter = require('./routes/indexRouter');

const app = express();

//tell the app to look for templates in the /views directory
app.set('views', path.join(__dirname, 'views'));
//enables the ejs package as the view template engine
app.set('view engine', 'ejs');

const assetsPath = path.join(__dirname, 'public');
//tell express to look for static assets in the public directory
app.use(express.static(assetsPath));



//routers
app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/', indexRouter);

//error middleware function.
//MUST be placed at the end of all middleware functions in application
app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
})

const PORT = 3000;
app.listen(PORT)