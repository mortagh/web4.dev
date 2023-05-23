const express = require("express");
const router = express.Router();
const { upload, s3 } = require("../middleware/bucket");
const Jimp = require("jimp");
const { dbConnect } = require("../module");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const image = req.file;
    const bottomText = req.body.bottomText;
    const topText = req.body.topText;
    const name = req.body.name;
    const tags = req.body.tags;
    const key = Date.now() + image.originalname;

    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    const jimpImage = await Jimp.read(image.buffer);

    jimpImage.print(font, 10, 0, topText);
    jimpImage.print(font, 10, 10, bottomText);

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

      const imageUrl = data.Location;

      const connection = dbConnect();
      const sql = "INSERT INTO memes (name, image) VALUES (?, ?)";
      const sql2 = "INSERT INTO meme_tag (meme_id, tag_id) VALUES (?, ?)";

      connection.query(sql, [name, imageUrl], function (err, result) {
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
          res.json({ message: imageUrl });
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
