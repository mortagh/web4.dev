const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config();

const memesRouter = require("./routes/memes");
const deleteRouter = require("./routes/delete");

app.use(cors())
app.use('/memes', memesRouter);
app.use('/memes/delete', deleteRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
});