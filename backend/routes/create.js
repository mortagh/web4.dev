const express = require('express');
const { dbConnect } = require('../module');
const { Meme } = require('../models/meme');
const upload = require('../middleware/bucket');

const app = express();

app.post('/', upload.single('image'), (req, res) => {
    return res.json({ message: req.file.location})
});

module.exports = app;

