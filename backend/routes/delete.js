const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');

router.delete('/:id', (req, res) => {
    const connection = dbConnect();
    const id = req.params.id;
    const sql = `DELETE FROM memes WHERE id = ${id}`;
    connection.query(sql, function(err, memes) {
        if (err) {
            res.status(500).json({ message: err.message });
        } else {
            res.status(200).json({ message: 'Meme deleted' });
        }
    });
    connection.end();
  }); 

  module.exports = router;