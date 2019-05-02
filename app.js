const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}.`))

app.get('/', (req, res) => res.send('Hello world'));

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('connected to mongoDB'))
  .catch(err => console.log(err));
