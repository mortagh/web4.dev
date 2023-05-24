const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');


router.get('/', (req, res) => {
    const connection = dbConnect();
    const sql =
    `
    SELECT memes.id, memes.name, memes.image, JSON_ARRAYAGG(tags.name) AS tag_names
    FROM memes
    LEFT JOIN meme_tag ON memes.id = meme_tag.meme_id
    LEFT JOIN tags ON meme_tag.tag_id = tags.id
    GROUP BY memes.id, memes.name, memes.image;
    
  ` ;
    connection.query(sql, function(err, memes) {
      if (err) throw err;
      res.json(memes)
    });
    connection.end();
  }); 

  module.exports = router;
