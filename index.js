// Import the ExpressJS package
const express = require('express');
const cors = require('cors');



// Create a new instance of the Express application
const app = express();
app.use(cors());
// Define an array of 5-letter words
const words = ['apple', 'plane', 'hello', 'world', 'pizza'];

// Define a GET endpoint that returns a random word from the array
app.get('/random-word', (req, res) => {
  const index = Math.floor(Math.random() * words.length);
  const word = words[index];
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ word }));
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
