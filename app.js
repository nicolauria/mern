const express = require('express');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server is running on port ${port}.`))

const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
mongoose.connect(db, { useNewUrlParser: true })
  .then(() => console.log('connected to mongoDB'))
  .catch(err => console.log(err));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const users = require('./routes/api/users');

app.use('/api/users', users);

const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);
