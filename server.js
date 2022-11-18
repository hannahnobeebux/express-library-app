const express = require ('express')
const {body, validationResult} = require('express')
const path = require('path')
const db = require('./db/db')
const seed = require('./db/seed')
const { User, Book } = require('./models')

//IMPORTING THE ROUTERS
const bookRouter = require('./routes/book.route')
const userRouter = require('./routes/user.route')

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))
//SENDING THE FILES THAT ARE STORED IN THE PUBLIC FOLDER
app.use(express.static("public"));


//OLD CODE - THIS IS NO LONGER NEEDED AS WE ARE STATICALLY USING ALL FILES IN THE "PUBLIC" FOLDER
// const htmlPath = path.join(__dirname, "index.html")
// app.get("/", (req,res) => {
//     res.sendFile(htmlPath)
// })

//USING THE ROUTERS
app.use("/", userRouter)
app.use("/", bookRouter)


//OLD CODE - WILL TAKE A USER INPUT (their name) AND OUPUTTING IT WITH A WELCOME MESSAGE 
app.post("/inputtedName", (req,res) => {
    res.send({username: `Welcome ${req.body.username}`})
})

//UPDATING THE THROUGH TABLE TO USE THE RELATIONSHIP BETWEEN USER AND BOOK 
//GETTING THE VALUES FROM THE DROP DOWN MENUS
app.post("/update", async (req,res) => {
    //USING A "try...catch" BLOCK THAT WILL EXECUTE THE CODE TO INSERT DATA INTO THE THROUGH TABLE UNTIL THE USER ATTEMPTS TO REPEAT AN ENTRY (ie: adding a book to the same list twice)
    try {
        console.log(req.body.status)
    //THE ENTIRE REQUEST - USER OBJECT, BOOK OBJECT AND STATUS ACCESSED VIA THE REQUEST
    const chosenBook = req.body.book
    const chosenUser = req.body.name
    const status = req.body.status
    const rating = req.body.rating

    //VALIDATING - NOT INPUTTING THE ENTRY IF STATUS IS NOT DEFINED (correct button isn't clicked)
    if(status === undefined) {
        res.status(400).send("undefined rating")
    }

    //VALIDATING - FINDING THE CORRESPONDING USER AND BOOK FROM THEIR name/title
    const user = await User.findOne({where : {firstName: chosenUser}})
    const book = await Book.findOne({where: {title: chosenBook}})

    //VALIDATING - CHECKING THAT THE user/book ACTUALLY EXISTS
    if (user === null || book === null){
        res.status(404).send("User or Book not found")
    } 

    //INSERTING THE GIVEN FIELDS INTO THE THROUGH TABLE 
    await db.query(`INSERT INTO User_Book (UserId, BookId, rating, status) VALUES (${user.id}, ${book.id}, '${rating}', '${status}')`)

    // await user.addBook(book)
    //SENDING THE DATA BACK IN A RESPONSE TO USE IN FRONT END JAVASCRIPT
    res.status(200).send({user: user.firstName, book: book.title, status: status, rating: rating})
        
    //ERROR HANDLING - CATCHING THE ERROR AND SENDING IN A RESPONSE 
    } catch (error) {
        const status = req.body.status
        //DEVELOPMENT OP - ALLOWING THE USER TO EASILY UPDATE THEIR LISTS EG: added to tbr --> then reading --> then read WITHOUT ERRORS!
        res.status(500).send({err: `Oops... you've already added this book to your ${status} list! Please remove it and try again :)`})
    }

})

//LISTENING ON PORT 5000
app.listen(5000, async () => {
    //ONLY RUN SEED WHEN YOU NEED TO REPOPULATE THE DATABASE 
    // await seed()
    console.log("listening on port 5000")
})


module.exports = app




