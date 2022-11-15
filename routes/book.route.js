const {Router} = require('express')
const Book = require('../models/book.model')
const User = require('../models/user.model')

const bookRouter = Router ()

//Returning all the books in the database 
//localhost:3000/books
bookRouter.get("/books", async (req, res) => {
    res.status(200).send(await Book.findAll())
})

module.exports = bookRouter