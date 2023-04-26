const express = require('express')
const app = express()
const jimp  = require('jimp');


jimp.read("./path/to/image.jpg")
  .then((image) => {
    // Do stuff with the image.
    jimp.loadFont('./font/Roboto-Regular.fnt').then((font) => {
    
        image.print(font, x, y, message); // print a message on an image. message can be a any type
        image.print(font, x, y, message, maxWidth); // print a message on an image with text wrapped at maxWidth
      });
  })
  .catch((err) => {
    // Handle an exception.
  });

  module.exports = Image;