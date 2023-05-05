const express = require("express");
const upload = require('../middleware/bucket');
const Jimp = require('jimp');

const app = express();

app.post("/", upload.single("image"), (req, res) => {
  return res.json({ message: req.file.location });
});

module.exports = app;