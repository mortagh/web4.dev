const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('aws-sdk');
const Jimp = require("jimp");

require('dotenv').config();

const bucket = "memes-bucket"
const port = process.env.MINIO_PORT
const host = process.env.MINIO_HOST

const s3 = new AWS.S3({
  endpoint: `http://${host}:${port}`,
  accessKeyId:process.env.MINIO_ROOT_USER,
  secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
  sslEnabled: false,
  s3ForcePathStyle: true,
  region: 'eu-west-3',
});

const storage = multerS3({
  s3,
  bucket,
  contentType: multerS3.AUTO_CONTENT_TYPE,
  metadata: (req, file, cb) => {
    cb(null, { fieldName: file.fieldname });
  },
  key: (req, file, cb) => {
    cb(null, Date.now().toString());
  },
});

const upload = multer({ storage });

// Middleware pour éditer l'image avant de l'envoyer sur S3
// const editImage = async (req, res, next) => {
//   try {
//     // Ouvrir l'image avec Jimp
//     const image = await Jimp.read(req.file.buffer);

//     // Manipuler l'image (ex: redimensionner, ajouter du texte, etc.)
//     image.resize(800, Jimp.AUTO);

//     // Convertir l'image modifiée en buffer
//     const modifiedImageBuffer = await image.getBufferAsync(Jimp.AUTO);

//     // Mettre à jour le buffer de l'image dans la requête
//     req.file.buffer = modifiedImageBuffer;

//     // Passer à la suite de la chaîne de middleware
//     next();
//   } catch (err) {
//     // En cas d'erreur, envoyer une réponse avec le code d'erreur 400 Bad Request
//     res.status(400).send({ error: err.message });
//   }
// };


function editImage(req, res, next) {
  const image = req.file;

  Jimp.read(image.buffer, (err, jimpImage) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: 'Error processing image' });
    }

    jimpImage.resize(200, 200).getBuffer(Jimp.MIME_JPEG, (err, buffer) => {
      if (err) {
        console.log(err);
        return res.status(500).send({ message: 'Error processing image' });
      }

      // Do something with the buffer, like uploading it to S3 or saving it to disk
      // ...

      // Send the response
      res.send({ url: 'https://example.com/my-image.jpg' });
    });
  });
}


module.exports = {s3, upload, editImage, bucket}