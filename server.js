const express = require ('express')
const {body, validationResult} = require('express')
const path = require('path')
const db = require('./db/db')
const seed = require('./db/seed')
const { User, Book } = require('./models')
// const { db } = require('./db/db')



const bookRouter = require('./routes/book.route')
const userRouter = require('./routes/user.route')

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))
//SENDING THE FILES THAT ARE STORED IN THE PUBLIC FOLDER
app.use(express.static("public"));

const htmlPath = path.join(__dirname, "index.html")

//THIS IS NO LONGER NEEDED AS WE ARE STATICALLY USING ALL FILES IN THE "PUBLIC" FOLDER
// app.get("/", (req,res) => {
//     res.sendFile(htmlPath)
// })

// app.get("/sync", async (req,res) => {
//     await db.sync({ force: true }); // clear out database + tables
//     res.sendStatus(200)
// })

app.use("/", userRouter)

app.use("/", bookRouter)

// app.get("/seed", async (req,res) => {
//     await seed()
//     res.status(200).send("Database has been repopulated")
// })

app.post("/inputtedName", (req,res) => {
    res.send({username: `Welcome ${req.body.username}`})
})

//UPDATING THE THROUGH TABLE TO USE THE RELATIONSHIPS 
app.post("/update", async (req,res) => {
    console.log(req.body.status)
    //THE ENTIRE REQUEST - USER OBJECT, BOOK OBJECT AND STATUS SUBMITTED 
    console.table(req.params)
    const chosenBook = req.body.book
    const chosenUser = req.body.name
    const status = req.body.status
    const rating = req.body.rating

    if(status === undefined) {
        return res.status(400).send("undefined rating")
    }

    // if(rating === undefined){
    //     return res.status(400).send("undefined status")
    // }

    const user = await User.findOne({where : {firstName: chosenUser}})
    const book = await Book.findOne({where: {title: chosenBook}})

    // console.table(user, book)

    if (user === null || book === null){
        return res.status(404).send("User or Book not found")
    } 

    db.query(`INSERT INTO User_Book (UserId, BookId, rating, status) VALUES (${user.id}, ${book.id}, '${rating}', '${status}')`)

    await user.addBook(book)
    // res.sendStatus(200)
    res.status(200).send({user: user.name, book: book.title, status: status, rating: rating})

    // res.redirect("../")

    // res.sendStatus(200)
    
    // res.redirect("../")

})



app.listen(5000, async () => {
    // await seed()
    console.log("listening on port 5000")
})


module.exports = app




