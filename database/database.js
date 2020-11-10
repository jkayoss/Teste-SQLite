const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'sqlite',
    storage: './database/data.sqlite'
})

module.exports = connection;