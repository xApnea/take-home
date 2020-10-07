const express = require('express');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/build/')));

// app.use('/users', users);
// app.use('/gifs', gifs);

app.get('/api', (req, res) => {
  res.status(200).send('Request is good.')
})

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname, '/../client/build/index.html'));
});

const port = process.env.PORT || 3000;
var server = app.listen(port, () => {console.log(`Listening on port: ${port}`)});

module.exports = server;