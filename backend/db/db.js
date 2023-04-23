const Sequelize = require('sequelize');
require('dotenv').config();

const db = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: 'mysql',
});

module.exports = db;