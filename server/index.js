const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const Promise = require('bluebird');

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const db = require('../database/index.js');
app.use('/', express.static(__dirname + '/../client/dist'));
app.use('/users', express.static(__dirname + '/../client/dist'));

app.use('/products', express.static(__dirname + '/../client/dist'));
app.use('/product/#', express.static(__dirname + '/../client/dist'));
app.use('/product/:title', express.static(__dirname + '/../client/dist'));

console.log('hi', db.User);

app.post('/user', function ( req, res) {
  let currentUser = new db.User({
    username: req.body.username,
    createdAt: new Date(),
  });
  currentUser.save(function(err, currentUser) {
    if (err) {
      console.log(err, 'there was an error saving this user');
    } else {
      console.log(currentUser);
    }
  });
  res.end();
});
app.get('/allusers', (req, res) => {
  console.log('usering2', db.Users);
  db.User.find().limit()
    .then(function(users) {
      console.log(users);
      res.status(200).send(users);
    })
    .catch(function(err) {
      console.log(err);
    });
});
app.listen(process.env.PORT || 3000, function() {
  console.log('listening!');
});
