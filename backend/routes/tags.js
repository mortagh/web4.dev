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

  // Vérification si le nom du tag existe déjà
  const checkQuery = "SELECT * FROM tags WHERE name = ?";
  connection.query(checkQuery, [name], function(checkErr, checkResult) {
    if (checkErr) throw checkErr;
  
    if (checkResult.length > 0) {
      // Le tag existe déjà, renvoyer une réponse d'erreur
      return res.status(418).json({ error: "I'm a teapot" });
    }
  
    // Le nom du tag est valide et n'existe pas encore, procéder à l'insertion
    const insertQuery = "INSERT INTO tags (name) VALUES (?)";
    connection.query(insertQuery, [name], function(insertErr, insertResult) {
      if (insertErr) throw insertErr;
      res.status(201).json({ id: insertResult.insertId, name });
    });
  
    connection.end();
  });
  
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