const {Router} = require('express');

const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('All books!'));
bookRouter.get('/:bookId', (req, res) => {
    const {bookId} = req.params;
    res.send(`Book ID: ${bookId}`);
})
bookRouter.get('/:bookId/reserve', (req, res) => {
    const {bookId} = req.params;
    res.send(`Reserve This book ID: ${bookId}`);
})

module.exports = bookRouter;