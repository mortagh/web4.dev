const express = require("express");
const upload = require('../middleware/bucket');
const Jimp = require('jimp');

const app = express();

const editImage = async (req, res, next) => {
  try {
    const image = await Jimp.read(req.file.buffer); // Ouvre l'image reçue
    // Faites vos modifications d'image ici
    image.resize(256, 256); // Exemple : redimensionne l'image à 256x256 pixels
    const buffer = await image.getBufferAsync(Jimp.AUTO); // Convertit l'image modifiée en buffer
    req.file.buffer = buffer; // Remplace le buffer original de l'image par le nouveau buffer modifié
    next();
  } catch (error) {
    next(error);
  }
};

app.post("/", upload.single("image"), editImage, (req, res) => {
  return res.json({ message: req.file.location})
});

module.exports = app;