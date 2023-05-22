const multer = require("multer");
const AWS = require("aws-sdk");
const Jimp = require("jimp");

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

const upload = multer({
    fileFilter: (req, file, cb) => {
        // vérification du type de fichier
        if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
            cb(new Error("Le format du fichier n'est pas valide."));
        } else {
            cb(null, true);
        }
    },
});

module.exports = {upload, s3};
