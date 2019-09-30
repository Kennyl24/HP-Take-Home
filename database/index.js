const mongoose = require('mongoose');
const uristring =
process.env.MONGOLAB_URI ||
process.env.MONGOHQ_URL ||
'mongodb://localhost/27017';

const theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});
const db = mongoose.connection;

// db.on('error', function(err) {
//   console.log('mongoose connection error', err);
// });

// db.once('open', function() {
//   console.log('mongoose connected successfully');
// });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: false,
  },
  createdAt: {
    type: Date,
    unique: false,
  }
});
const User = mongoose.model('User', userSchema);

module.exports.User = User;


