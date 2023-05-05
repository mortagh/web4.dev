const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');


router.get('/', (req, res) => {
    const connection = dbConnect();
    const sql = "SELECT * FROM users";
    connection.query(sql, function(err, user) {
      if (err) throw err;
      res.json(user)
    });
    connection.end();
  });

router.post("/", (req, res) => {
    
});

  module.exports = router;