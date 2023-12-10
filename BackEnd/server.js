//Setting up basic server info
const express = require('express')
const app = express()
const port = 4000
//Adding Error handling
const path = require('path');
//Importing Body Parser for id-specific requests
const bodyParser = require("body-parser");
//Importing CORS and adding unwanted HTTP request protection
  //CORS
const cors = require('cors');
app.use(cors());
  //Unwanted HTTP request protection (and the handshake)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next()
});


//The server will constantly listen for localhost:4000 connections & requests
app.listen(port, () => {
    console.log(`Server now listening on port ${port}`);
  })