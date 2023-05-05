const express = require('express')
const app = express()
const jimp  = require('jimp');

module.exports = {
  
    textImage :function(file) {
      image = jimp.read(file);

      let xtop = jimp.HORIZONTAL_ALIGN_CENTER;
      let ytop = jimp.VERTICAL_ALIGN_TOP;
      let xbottom = jimp.HORIZONTAL_ALIGN_CENTER;
      let ybottom = jimp.VERTICAL_ALIGN_BOTTOM;

      jimp.loadFont('./font/Roboto-Regular.fnt').then((font) => {    
        image.print(font, xtop, ytop, "texte du haut"); 
        image.print(font, xbottom, ybottom, "texte du bas");
      });
  }
};