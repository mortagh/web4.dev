const Sequelize = require('sequelize');
const db = require('../db/db');
const Meme = require('./meme');

const Tag = db.define('tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
});

Tag.associate = function (Tag) {
    Tag.belongsToMany(Meme, {
        through: 'MemeTag',
        foreignKey: 'tagId',
        otherKey: 'memeId',
        as: 'memes'
    });
}

module.exports = Tag;
