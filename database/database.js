const Sequelize = require('sequelize');
const path = require('path');

const connection = new Sequelize({
    dialect: 'sqlite',
    dialectModule: require('sqlite3'),
    storage: path.resolve(__dirname, 'banco.sqlite')
})
 
module.exports = connection;