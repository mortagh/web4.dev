const express = require('express');
const mysql = require('mysql');


module.exports = {
    dbConnect: function() {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'example',
            database: 'express_meme'
        });
        connection.connect();
        return connection;
    }
}