const multer = require("multer");
const multerS3 = require("multer-s3");
const AWS = require("aws-sdk");

require("dotenv").config();

const bucket = "memes-bucket";
const port = process.env.MINIO_PORT;
const host = process.env.MINIO_HOST;

//service qui ce connecte au bucket
const s3 = new AWS.S3({
  endpoint: `http://${host}:${port}`,
  accessKeyId: process.env.MINIO_ROOT_USER,
  secretAccessKey: process.env.MINIO_ROOT_PASSWORD,
  sslEnabled: false,
  s3ForcePathStyle: true,
  region: "eu-west-3",
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

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    // vérification du type de fichier
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      cb(new Error("Le format du fichier n'est pas valide."));
    } else {
      cb(null, true);
    }
  },
  async function(req, res, next) {
    try {
      const image = await Jimp.read(req.file.buffer);
      console.log(image);
      Jimp.loadFont("./font/Roboto-Regular.fnt").then((font) => {
        image.print(font, xtop, ytop, "texte du haut");
        image.print(font, xbottom, ybottom, "texte du bas");
      });
      image.convert("jpeg");
      req.file.buffer = await image.getBufferAsync(Jimp.MIME_JPEG);
      next();
    } catch (error) {
      next(error);
    }
    console("ça marche putain");
  },
});

module.exports = upload;