const {DataTypes} = require('sequelize')
const db = require('../db/db')

// class User extends Model {}

//db.define will do sequelize:db 

const User = db.define(
    "User", 
    {firstName: {
        type: DataTypes.STRING,
        allowNull: false 
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false 
    }, 
    password: {
        type: DataTypes.STRING, 
        allowNull: false 
}}

)

// User.init ({
//     firstName: {
//         type: DataTypes.STRING,
//         allowNull: false 
//     }, 
//     email: {
//         type: DataTypes.STRING, 
//         allowNull: false 
//     }, 
//     password: {
//         type: DataTypes.STRING, 
//         allowNull: false 
// }
// }, 
// {
//     sequelize: db
// })

module.exports = User 