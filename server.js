const express = require('express');
require('dotenv').config();
const router = require('./route/ContactRoute')

const cors = require('cors');
const path = require('path');

const app = express();


//creating the middlewares..
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/', router)


app.get('/', (req, res, next) => {
    res.send(`<h1 style="color:blue;text-align:center;">Portfolio_Backend</h1>`)
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server is running on Port ${PORT}`);
})