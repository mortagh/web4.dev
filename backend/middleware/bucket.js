const multer = require('multer');
const multerS3 = require('multer-s3');
const AWS = require('@aws-sdk/client-s3')

require('dotenv').config();

const bucket = "memes-bucket"
const port = 9000
const host = process.env.SQL_HOST

const s3 = new AWS.S3({
    endpoint: `http://${host}:${port}`,
    credentials : {
        accessKeyId:process.env.MINIO_ROOT_USER,
        secretAccessKey: process.env.MINIO_ROOT_PASSWORD,

    },
    sslEnabled: false,
    s3ForcePathStyle: true,
    region: 'us-east-1',
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

module.exports = upload;

