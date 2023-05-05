const Sequelize = require('sequelize');
const db = require('../db/db');
const Tag = require('./tag');
const Meme = require('./meme');

const MemeTag = db.define('meme_tag', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    meme_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Meme,
            key: 'id'
        }
    },
    tag_id: {
        type: Sequelize.INTEGER,
        references: {
            model: Tag,
            key: 'id'
        }
    }
},{
    timestamps: false,
    createdAt: false,
    updatedAt: false,
});

module.exports = MemeTag;