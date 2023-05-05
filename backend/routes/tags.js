const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');
const bodyParser = require('body-parser');


router.get('/', (req, res) => {
    const connection = dbConnect();
    const sql = "SELECT * FROM tags";
    connection.query(sql, function(err, tags) {
      if (err) throw err;
      res.json(tags)
    });
    connection.end();
}); 
router.use(bodyParser.json())

router.post('/', (req,res) => {
    const connection = dbConnect();
    const sql = "INSERT INTO tags SET ?";
    const tag = {
        name: req.body.name
    }
    console.log(req.body)
    connection.query(sql, tag, function(err, result) {
        if (err) throw err;
        res.json(result)
    });
    connection.end();
    
})

router.delete('/:id', (req, res) => {
    const connection = dbConnect();
    const sql = "DELETE FROM tags WHERE id = ?";
    const id = req.params.id;
    connection.query(sql, id, function(err, result) {
      if (err) throw err;
      res.json(result)
    });
    connection.end();
  });


module.exports = router;