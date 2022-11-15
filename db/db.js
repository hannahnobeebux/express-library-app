// imports
const { Sequelize } = require('sequelize')

//create an instance of the database call it db
const db = new Sequelize({
    dialect: 'sqlite',
    storage: './library.sqlite',
    logging: false
})

//export
module.exports = db