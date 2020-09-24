const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/assesmentdDB', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

module.exports = mongoose;
