const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');

router.delete('/', (req, res) => {
    const connection = dbConnect();
    const sql = "SELECT * FROM memes";
    connection.query(sql, function(err, memes) {
      if (err) throw err;
      res.json(memes)
    });
    connection.end();
  }); 

  module.exports = router;