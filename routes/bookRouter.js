const {Router} = require('express');
const {getBookById, reserveBook} = require('../controllers/bookController');

const bookRouter = Router();

bookRouter.get('/', (req, res) => res.send('All books!'));
bookRouter.get('/:bookId', getBookById)
bookRouter.get('/:bookId/reserve', reserveBook)

module.exports = bookRouter;