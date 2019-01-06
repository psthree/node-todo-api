//to start mongo sever
// cd /Users/peterstema/mongo/bin
// ./mongod --dbpath ~/mongo-data

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

// let newTodo = new Todo({
//   text: '    test   '
//   // text: 'Play guitar',
//   // completed: false,
//   // completedAt: new Date()
// });

// let newUser = new User({
//   email: 'psthree@aol.com'
// });

// newUser.save().then(
//   document => {
//     console.log('Saved USer', document);
//   },
//   error => {
//     console.log('Unable to save user', error);
//   }
// );
