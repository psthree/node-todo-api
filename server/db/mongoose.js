const mongoose = require('mongoose');

// which promise library mongoose uses
mongoose.Promise = global.Promise;

//had to add , { useNewUrlParser: true }
mongoose.connect(
  'mongodb://localhost:27017/TodoApp',
  { useNewUrlParser: true }
);

module.exports = {
  mongoose: mongoose
};
