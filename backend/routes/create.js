const express = require("express");
const router = express.Router();
const { upload, s3 } = require("../middleware/bucket");
const Jimp = require("jimp");
const { dbConnect } = require('../module');
const path =require('path')

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const image = req.file;
    const bottomText = req.body.bottomText;
    const topText = req.body.topText;
    const name = req.body.name;
    const tags = req.body.tags;
    const key = Date.now() + image.originalname;


    // Vérification des champs obligatoires
    if (!image || !bottomText || !topText || !name || !tags || !Array.isArray(tags) || tags.length === 0) {
      // Les champs obligatoires ne sont pas renseignés ou invalides
      return res.status(400).json({ message: "Tous les champs obligatoires doivent être renseignés." });
    }

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
      ACL: "public-read",
    };

    s3.upload(params, async (err, data) => {
      if (err) {
        console.error(err);
        return res
          .status(500)
          .json({ message: "Une erreur s'est produite lors du téléchargement de l'image." });
      }

      const connection = dbConnect();
      const sql = "INSERT INTO memes (name, image) VALUES (?, ?)";
      const sql2 = "INSERT INTO meme_tag (meme_id, tag_id) VALUES (?, ?)";

      connection.query(sql, [name, key], function (err, result) {
        if (err) throw err;
        console.log("Meme inséré dans la base de données.");
        const memeId = result.insertId;

        const tagInsertPromises = tags.map((tag) => {
          return new Promise((resolve, reject) => {
            connection.query(sql2, [memeId, tag], function (err, result) {
              if (err) reject(err);
              console.log("meme_tag inséré dans la base de données.");
              resolve();
            });
          });
        });

        try {
          Promise.all(tagInsertPromises);
          console.log("Toutes les relations meme_tag ont été insérées dans la base de données.");
          connection.end();
          res.json({ message: key });
        } catch (err) {
          console.error(err);
          connection.end();
          res.status(500).json({ message: "Une erreur s'est produite lors de l'insertion des tags." });
        }
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Une erreur s'est produite lors du traitement de l'image." });
  }
});

module.exports = router;
