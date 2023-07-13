const express = require('express');
const PORT = 3001;
const port = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const {init} = require('./question-handlers');
 

app.use((req, res) => {
    res.status(404).end();
});



init();