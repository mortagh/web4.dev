const express = require('express');
const router = express.Router();
const { dbConnect } = require('../module');
const user = require('../models/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


router.post("/", async (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ error: "Le nom d'utilisateur et le mot de passe sont obligatoires" });
    }
    const findUser = await user.findOne({
      where: {
        username,
      },
    })

      console.log(findUser.password , password)
      if (!findUser) {
        return res.status(404).json({ error: "L'utilisateur n'existe pas" });
      }
      if (!bcryptjs.compareSync(password, findUser.password)) {
        return res.status(401).json({ error: "Le mot de passe est incorrect" });
      }
      res.json( { token: jwt.sign({ id: findUser.id }, process.env.JWT_SECRET) } );
    });


  module.exports = router;