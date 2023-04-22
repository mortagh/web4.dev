const express = require('express');
const mysql = require('mysql');

require('dotenv').config();

module.exports = {
    dbConnect: function() {
        const connection = mysql.createConnection({
            host: process.env.SQL_HOST,
            user: process.env.SQL_USER,
            password: process.env.SQL_PASSWORD,
            database: 'express_meme'
        });
        connection.connect();
        return connection;
    }
};