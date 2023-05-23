const express = require("express");
const router = express.Router();
const { upload, s3 } = require('../middleware/bucket');
const Jimp = require("jimp");
const { dbConnect } = require('../module');
const path =require('path')

router.post("/", upload.single("image"), async (req, res) => {
  const image = req.file;
  const bottomText = req.body.bottomText;
  const topText = req.body.topText;
  const name = req.body.name;
  const key = Date.now() + image.originalname;

  // let fPath = path.resolve(__dirname,'font/font.fnt')
  let fPath = path.resolve(Jimp.FONT_SANS_32_WHITE)

  const font = await Jimp.loadFont(fPath);
  const jimpImage = await Jimp.read(Buffer.from(image.buffer, "base64"));

  var w = jimpImage.bitmap.width;
  var h = jimpImage.bitmap.height;
  var topTextWidth = Jimp.measureText(font, topText);
  var topTextHeight = Jimp.measureTextHeight(font, topText);

  var bottomTextWidth = Jimp.measureText(font, bottomText);
  var bottomTextHeight = Jimp.measureTextHeight(font, bottomText);
  jimpImage.print(
    font, w/2 - topTextWidth/2, 0,
    {
      text: topText,
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_TOP,
  },topTextWidth, topTextHeight);
  jimpImage.print(
    font, w/2 - bottomTextWidth/2, h - bottomTextHeight,
    {
      text: bottomText,
      alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
      alignmentY: Jimp.VERTICAL_ALIGN_BOTTOM,
  },bottomTextWidth, bottomTextHeight);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: key,
    Body: await jimpImage.getBufferAsync(Jimp.MIME_JPEG),
    ContentType: image.mimetype,
    ACL: 'public-read'
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Une erreur s'est produite lors du téléchargement de l'image." });
    }
    res.json({ message: data.Location });

    const connection = dbConnect();
    const sql = "INSERT INTO memes (name, image) VALUES (?, ?)";
    connection.query(sql, [name, key], function(err, result) {
      if (err) throw err;
      console.log("Image insérée dans la base de données.");
    });
    connection.end();
    
  });
});

module.exports = router;
