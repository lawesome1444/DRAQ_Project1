//Setting up basic server info
const express = require('express')
const app = express()
const port = 4000

//Adding Error handling
const path = require('path');

//Importing Body Parser for id-specific requests
const bodyParser = require("body-parser");
  //Configuring Body-Parser to be used as middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

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

//Importing and setting up Mongoose (for communicating with the DB)
const mongoose = require ('mongoose');
//More error handling
main().catch(err => console.log(err));

//Connecting to MongoDB database
async function main() {
  await mongoose.connect('mongodb+srv://draqProject1:admin@conorcluster.9mvkxp3.mongodb.net/?retryWrites=true&w=majority');
}

//Setting up the Game Schema, the layout each document in the DB will follow
const gameSchema = new mongoose.Schema({
  title:String,
  boxArt:String,
  desc:String,
  price:Number,
  tags:String
});

//gameModel will be used when interacting with the database
const gameModel = mongoose.model('games', gameSchema);


//Listen for requests wanting the entire list of Games on the database and send it on
app.get('/api/games', async(req, res)=>{
  //Get all game documents from the MongoDB database
  let games = await gameModel.find({});

  //When they have all been collected, return the JSON to the component that requested it
  res.json(games);

})



//The server will constantly listen for localhost:4000 connections & requests
app.listen(port, () => {
    console.log(`Server now listening on port ${port}`);
  })