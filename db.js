const authors = [
    {id: 1, name: 'James Islington'},
    {id: 2, name: 'Brandon Sanderson'},
    {id: 3, name: 'Jason'},
]

const books = [
    {id: 1, title: 'The Light of All That Falls', authorId: 1},
    {id: 2, title: 'Mistborn', authorId: 2},
]

async function getAuthorById(authorId) {
    return authors.find(author => author.id === authorId);
}

async function getBookById(bookId) {
    console.log('running getBookByID');
    const book = books.find(book => book.id === bookId);
    console.log(book);
    return book
}

module.exports = {getAuthorById, getBookById};