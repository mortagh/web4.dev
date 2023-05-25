const express = require('express')
const app = express()
const Jimp  = require('jimp');
const path =require('path')

module.exports = {
  editImage: async function(imageEdit, bottomText, topText){
    let fPath = path.resolve(Jimp.FONT_SANS_64_WHITE)
    
    const font = await Jimp.loadFont(fPath);
    
    var w = imageEdit.bitmap.width;
    var h = imageEdit.bitmap.height;
    var topTextWidth = Jimp.measureText(font, topText);
    var topTextHeight = Jimp.measureTextHeight(font, topText);
    
    var bottomTextWidth = Jimp.measureText(font, bottomText);
    var bottomTextHeight = Jimp.measureTextHeight(font, bottomText);
    imageEdit.print(
      font, w/2 - topTextWidth/2, 0,
      {
        text: topText,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP,
    },topTextWidth, topTextHeight);
    imageEdit.print(
      font, w/2 - bottomTextWidth/2, h - bottomTextHeight,
      {
        text: bottomText,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM,
    },bottomTextWidth, bottomTextHeight);

    return imageEdit;
  }
}