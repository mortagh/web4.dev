const Sequelize = require('sequelize');
const db = require('../db/db')
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
    memeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Meme,
            key: 'id'
        }
    }
});

Tag.belongsTo(Meme, { foreignKey: 'memeId' });

module.exports = Tag;
