const {Router} = require('express')
const validateUser = require('../middleware/validateUser')
const Book = require('../models/book.model')
const User = require('../models/user.model')


const userRouter = Router()

//Returning all the users in the database 
//localhost:3000/users
userRouter.get("/users", async (req, res) => {
    res.status(200).send(await User.findAll())
})

module.exports = userRouter