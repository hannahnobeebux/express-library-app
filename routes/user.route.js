const {Router} = require('express')
const Book = require('../models/book.model')
const User = require('../models/user.model')

//CREATING THE USER ROUTER
const userRouter = Router()

//RETURNING ALL USERS IN THE DATABASE
//localhost:3000/users
userRouter.get("/users", async (req, res) => {
    res.status(200).send(await User.findAll())
})

//DISPLAYING THE API CALL ON THE FRONT END 


//FINDING A SPECIFIC USER IN THE DATABASE 
//localhost:3000/users/Amy
userRouter.get("/users/:name", async (req,res) => {
    // const letter = req.params.name.split[0]
    res.status(200).send(await User.findOne({where: {firstName:req.params.name}}))
})

module.exports = userRouter