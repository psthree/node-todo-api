const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

const id = '5c55eeb73f82879be9b57aba ';
const userId = '5c30f93fd191694a870a7dfc';

//tells if the id is valid
//ObjectID.isValid
if (!ObjectID.isValid(id)) {
  console.log('your id is not vaild');
}

// Todo.find({
//   _id: id
// }).then(todos => {
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then(todo => {
//   console.log('Todo', todo);
// });

// Todo.findById(id)
//   .then(todo => {
//     if (!todo) {
//       return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
//   })
//   .catch(error => {
//     console.log('Opps', error);
//   });

User.findById(userId)
  .then(userId => {
    if (!userId) {
      return console.log('User not found');
    }
    console.log('userId', userId);
  })
  .catch(error => {
    console.log('Opps, user ID error', error);
  });

//nodemon mongoose-queries.js
