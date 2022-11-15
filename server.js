const express = require ('express')
const {body, validationResult} = require('express')
const path = require('path')
const seed = require('./db/seed')
// const { db } = require('./db/db')


// const bookRouter = require('./routes/book.route')
// const userRouter = require('./routes/user.route')

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended:true}))
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

// app.use("/", userRouter)

// app.use("/", bookRouter)

// app.get("/seed", async (req,res) => {
//     await seed()
//     res.status(200).send("Database has been repopulated")
// })

app.listen(5000, async () => {
    await seed()
    console.log("listening on port 5000")
})

module.exports = app




