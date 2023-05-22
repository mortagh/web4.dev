const express = require("express");
const router = express.Router();
const { upload, s3 } = require('../middleware/bucket');
const Jimp = require("jimp");

router.post("/", upload.single("image"), async (req, res) => {
  const image = req.file;
  const bottomText = req.body.bottomText;
  const topText = req.body.topText;

  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  const jimpImage = await Jimp.read(Buffer.from(image.buffer, "base64"));

  jimpImage.print(font, 10, 0, topText);
  jimpImage.print(font, 10, 10, bottomText);

  const params = {
    Bucket: process.env.BUCKET_NAME,
    Key: Date.now() + image.originalname,
    Body: await jimpImage.getBufferAsync(image.mimetype),
    ContentType: image.mimetype,
    ACL: 'public-read'
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Une erreur s'est produite lors du téléchargement de l'image." });
    }

    res.json({ message: data.Location });
  });
});

module.exports = router;
