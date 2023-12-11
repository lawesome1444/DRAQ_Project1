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

//Listen for requests for specific games using a body-parsed ID
app.get('/api/game/:id', async(req, res)=>{
  //Find the game by id
  let game = await gameModel.findById({_id:req.params.id})
  //Send the game data for that specific ID
  res.send(game);
})

//Similar to above, except this listens for requests to update game entries using the body-parsed ID
app.put('/api/game/:id', async(req, res)=>{
  //Find the game by ID then update it
  let game = await gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true});
  res.send(game);
})


//Listen for post requests to api/games. Used by "addGame.js" to add new games to the database
app.post('/api/games', (req, res) => {
  console.log(req.body);

  //Create a new game entry using the data provided by the user in the "addGame.js" form
  gameModel.create({
    title:req.body.title,
    boxArt:req.body.boxArt,
    desc:req.body.desc,
    price:req.body.price,
    tags:req.body.tags
  })
  //If the data is successfully sent, notify the user
  .then(()=>{res.send("Data Received")})
  //Ditto in case data fails to be sent to the Mongo DataBase
  .catch(()=>{res.send("Data Not Received")})

})

//Listen for entry deletion requests
app.delete('/api/game/:id', async(req, res)=>{
  console.log("Delete "+req.params.id);

  //Find the game with a matching ID and delete it
  let game = await gameModel.findByIdAndDelete(req.params.id);

  //Send the new game list back
  res.send(game);
})



//The server will constantly listen for localhost:4000 connections & requests
app.listen(port, () => {
    console.log(`Server now listening on port ${port}`);
  })