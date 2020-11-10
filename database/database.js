const Sequelize = require('sequelize');

const connection = new Sequelize({
    dialect: 'sqlite',
    dialectModule: require('sqlite3'),
    storage: '/'
})
 
module.exports = connection;