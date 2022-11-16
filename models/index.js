//RELATIONSHIPS BETWEEN MODELS WILL BE MADE HERE

const db = require("../db/db");
const Book = require("./book.model");
const User = require("./user.model");

//MANY-TO-MANY 
//MANY USERS CAN BORROW MANY BOOKS 
//A SINGLE BOOK CAN BE ON MANY USERS LISTS (WANT TO READ/TBR)
//LIBRARY - PERSONAL LIBRARY FOR TRACKING READING LISTS

User.belongsToMany(Book, {through: 'User_Book'})
Book.belongsToMany(User, {through: 'User_Book'})

// db.query('ALTER TABLE User_Book ADD COLUMN status STRING')

//ONE-TO-MANY RELATIONSHIP
// A SINGLE USER CAN BORROW MANY BOOKS 
// A SINGLE BOOK CAN ONLY BE BORROWED BY A SINGLE USER AT ALL TIMES 

// User.hasMany(Board)
// Board.belongsTo(User)

module.exports = {Book, User}