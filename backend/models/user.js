const Sequelize = require('sequelize');
const db = require('../db/db')

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    test: {
        type:Sequelize.STRING,
        allowNull:true
    }

});

module.exports = User;