const db = require('../models/db');
const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require('../errors/CustomNotFound');

const getBookById = asyncHandler(async (req, res) => {
    const {bookId} = req.params;

    const book = await db.getBookById(Number(bookId));
    const author = await db.getAuthorById(book.authorId);
    

    if (!book) {
        throw new Error('Book not found!');
    }

    res.send(`Book title: ${book.title} | Written by: ${author.name}`);
})

const reserveBook = asyncHandler(async (req, res) => {
    const {bookId} = req.params;

    const book = await db.getBookById(Number(bookId));
    const author = await db.getAuthorById(book.authorId);

    if (!book) {
        throw new Error('Book not found!');
    }

    res.send(`Reserve this book: ${book.title} (by ${author.name})`);
})

module.exports = {getBookById, reserveBook};