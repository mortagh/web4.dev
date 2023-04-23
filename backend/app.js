const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db/db')
const meme = require('./models/meme')

require('dotenv').config();

const upload = require('./middleware/bucket')

const memesRouter = require("./routes/memes");
const deleteRouter = require("./routes/delete");
const createRouter = require("./routes/create");

app.use(cors())
app.use('/memes', memesRouter);
app.use('/memes/delete', deleteRouter);
app.use('/memes/create', createRouter);


db.sync()
    .then(() => {
        console.log('Database connected')
    })
    .catch((err) => {
        console.log(err)
    })


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
});