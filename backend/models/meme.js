const Sequelize = require('sequelize');
const db = require('../db/db')
const Tag = require('./tag');

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
    }
});

Meme.hasMany(Tag, { foreignKey: 'memeId' });

module.exports = Meme;
