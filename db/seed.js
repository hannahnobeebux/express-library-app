//import dependencies
const {Book, User} = require("../models")
const path = require('path') //helps us find our file easily
const  db  = require('./db')
const fs = require('fs').promises //helps us get access to promises when dealing with seeding data into our database


// async function seed() {
//     await db.sync ({
//         force: true 
//     })

//     Book.bulkCreate([
//         {title: "The Great Gatsby",
//         author: "F. Scott Fitzgerald",
//         rating: 0, 
//         description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan"
//         }
//     ])
// }

//write our seed function -> take our json file, create rows with our data into it
const seed = async () => {

    await db.sync({ force: true }); // clear out database + tables

    const bookSeedPath = path.join(__dirname, 'books.json'); //get the path to Book.json file
    const userSeedPath = path.join(__dirname, 'users.json')


    const bookBuffer = await fs.readFile(bookSeedPath); //asynchronously reads the content in this file
    const userBuffer = await fs.readFile(userSeedPath);

    const {booksData} = JSON.parse(String(bookBuffer)); // First we convert the data from buffer into a string, then we parse the JSON so it converts from string -> object
    const {usersData} = JSON.parse(String(userBuffer));


    const BookPromises = booksData.map(book => Book.create(book)); 
    const UserPromises = usersData.map(user => User.create(user));

    await Promise.all(BookPromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.
    await Promise.all(UserPromises)

    console.log("Database, Book and User table populated!")
}



module.exports = seed