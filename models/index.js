
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('localhost', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});