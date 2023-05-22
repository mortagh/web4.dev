const Sequelize = require('sequelize');
const db = require('../db/db');
const Meme = require('./meme');

const Tag = db.define('tags', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

Tag.associate = function (models) {
    Tag.belongsToMany(models.meme, {
        through: 'meme_tag',
        foreignKey: 'tag_id',
        as: 'memes'
    });
}

module.exports = Tag;
