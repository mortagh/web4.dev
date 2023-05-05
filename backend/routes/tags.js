const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');
const bodyParser = require('body-parser');


router.use(bodyParser.json());
router.get('/', (req, res) => {
    const connection = dbConnect();
    const sql = "SELECT * FROM tags";
    connection.query(sql, function(err, tags) {
      if (err) throw err;
      res.json(tags)
    });
    connection.end();
}); 


router.post('/', (req, res) => {
  const { name } = req.body; 
  console.log(req.body);
  if (!name) {
    return res.status(400).json({ error: 'Le nom du tag est obligatoire' });
  }

  const connection = dbConnect();
  const sql = "INSERT INTO tags (name) VALUES (?)";
  connection.query(sql, [name], function(err, result) {
    if (err) throw err;
    res.status(201).json({ id: result.insertId, name });
  });
  connection.end();
});


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