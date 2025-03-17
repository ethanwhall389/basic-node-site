const db = require('../db');
const asyncHandler = require('express-async-handler');
const CustomNotFoundError = require('../errors/CustomNotFound');

const getAuthorById = asyncHandler(async (req, res) => {
    const { authorId } = req.params;

    const author = await db.getAuthorById(Number(authorId));

    if (!author) {
        //asyncHandler will auto call next() which will bubble down to the
        //error middleware function in app.js
        throw new Error('Author not found');
    }

    res.send(`Author Name: ${author.name}`);
})

module.exports = {getAuthorById};