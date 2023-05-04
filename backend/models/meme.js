//import datatypes from sequelize
const Sequelize = require('sequelize');
const db = require('../db/db')

const Meme = db.define('meme', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    },
    tags: {
        type: Sequelize.STRING,
        allowNull: false
    }


});

module.exports = Meme;
