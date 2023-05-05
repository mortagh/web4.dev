const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db/db')
const meme = require('./models/meme')
const user = require('./models/user')
const tag = require('./models/tag')

require('dotenv').config();

const upload = require('./middleware/bucket')

const memesRouter = require("./routes/memes");
const deleteRouter = require("./routes/delete");
const createRouter = require("./routes/create");
const TagsRouter = require("./routes/tags");

app.use(cors())
app.use('/memes', memesRouter);
app.use('/memes/delete', deleteRouter);
app.use('/memes/create', createRouter);
app.use('/tags', TagsRouter);


db.sync()
    .then(() => {
        console.log('Database connected')
    })
    .catch((err) => {
        console.log(err)
    })


const port = process.env.API_PORT || 3000;

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`)
});