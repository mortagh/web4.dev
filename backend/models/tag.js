const Sequelize = require('sequelize');
const db = require('../db/db')

const Tag = db.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }

});

module.exports = Tag;
    