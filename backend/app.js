const express = require('express')
const app = express()
const cors = require('cors')
const db = require('./db/db')

//import models sequelize
require ('./models') 



require('dotenv').config();

const upload = require('./middleware/bucket')

const memesRouter = require("./routes/memes");
const deleteRouter = require("./routes/delete");
const createRouter = require("./routes/create");
const tagsRouter = require("./routes/tags");
const authRouter = require("./routes/authenticate");
const auth = require('./middleware/auth')
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(cors())
app.use('/memes', auth.verifyToken, memesRouter);
app.use('/memes/delete',auth.verifyToken, deleteRouter);
app.use('/memes/create',auth.verifyToken, createRouter);
app.use('/tags',auth.verifyToken, tagsRouter);
app.use('/auth', authRouter);


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

