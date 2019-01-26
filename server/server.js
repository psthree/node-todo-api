//to start mongo sever
// cd /Users/peterstema/mongo/bin
// ./mongod --dbpath ~/mongo-data

const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();

//middle ware
//turns body into json
app.use(bodyParser.json());

//routes(url and callback)
app.post('/todos', (req, res) => {
  console.log(req.body);
  const todo = new Todo({
    text: req.body.text
  });

  //saves to datebase and has callback for success, error
  todo.save().then(
    document => {
      console.log(document);
      //sends the doc back to user
      res.send(document);
    },
    error => {
      console.log('error: ', error);
      //send back a status code and error
      res.status(400).send(error);
    }
  );
});

app.listen(3000, () => {
  console.log('Starting up on port 3000 sir');
});

//same as app:app
module.exports = { app };

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
