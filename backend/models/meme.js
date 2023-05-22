const Sequelize = require('sequelize');
const db = require('../db/db');
const Tag = require('./tag');

const Meme = db.define('memes', {
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
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

Meme.associate = function (models) {
    Meme.belongsToMany(models.tag, {
        through: 'meme_tag',
        foreignKey: 'meme_id',
        as: 'tags'
    });
}

module.exports = Meme;
