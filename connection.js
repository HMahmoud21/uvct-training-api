const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hajer:QqH6iLXGFcuQUSJe@cluster0.wehhwkm.mongodb.net/test', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("we're connected!")
});