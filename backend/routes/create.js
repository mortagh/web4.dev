const express = require("express");
const router = express.Router();
const upload = require('../middleware/bucket');


router.post("/", upload.single("image"), (req, res) => {
  return res.json({ message: req.file.location });
});

module.exports = router;