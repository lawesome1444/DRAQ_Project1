//Setting up basic server info
const express = require('express')
const app = express()
const port = 4000

//The server will constantly listen for localhost:4000 connections & requests
app.listen(port, () => {
    console.log(`Server now listening on port ${port}`);
  })