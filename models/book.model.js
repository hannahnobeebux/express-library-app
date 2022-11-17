const {DataTypes} = require('sequelize')
const db = require('../db/db')

// class Book extends Model {}

// Book.init ({
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false 
//     }, 
//     author: {
//         type: DataTypes.STRING,
//         allowNull: false 
//     }, 
//     rating: {
//         type: DataTypes.NUMBER 
//     }

// }, {
//     sequelize: db
// })

const Book = db.define(
    "Book", 
    {
        title: {
            type: DataTypes.STRING,
            allowNull: false 
        }, 
        author: {
            type: DataTypes.STRING,
            allowNull: false 
        }, 
        description: {
            type: DataTypes.STRING
        }
    
    }
)

module.exports = Book 
// export default Book 