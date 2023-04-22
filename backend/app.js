const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config();

const memesRouter = require("./routes/memes");

app.use(cors())
app.use('/memes', memesRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
  });