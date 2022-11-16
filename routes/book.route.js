const {Router} = require('express')
const Book = require('../models/book.model')
const User = require('../models/user.model')

const bookRouter = Router ()

//RETURNING ALL THE BOOKS IN THE DATABASE
//localhost:3000/books
bookRouter.get("/books", async (req, res) => {
    const books = await Book.findAll()
    res.status(200).send(books)
})





module.exports = bookRouter