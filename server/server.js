const express = require('express')
const mongoose = require('mongoose');
const session = require('express-session');
const fileUpload = require('express-fileupload');
require('dotenv').config({path:"../config/keys.env"});


var app = express()

app.get('/', (req, res) => res.send('hello world'));
app.get('/new', (req, res) => res.send('sheida'));

app.use(fileUpload());
app.use(session({
secret: `${process.env.SESSION_SECRET}`,
 resave: false,
 saveUninitialized: true}))


mongoose.connect(process.env.Mongo_DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log(`Connected to MongoDB`);
})
.catch(err=>console.log(`Error occured when connecting to database ${err}`));

const PORT = process.env.PORT;
app.listen(PORT,()=>{

    console.log("Server is connected...")
});