//to start mongo sever
// cd /Users/peterstema/mongo/bin
// ./mongod --dbpath ~/mongo-data

const express = require('express');
const bodyParser = require('body-parser');
const { ObjectID } = require('mongodb');

const { mongoose } = require('./db/mongoose');
const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
//if on heroku it will genertate the port if not (localhost) use 3000
const port = process.env.PORT || 3000;

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

app.get('/todos', (req, res) => {
  Todo.find().then(
    todos => {
      res.send({ todos });
    },
    error => {
      console.log('error', error);
      res.status(400).send(error);
    }
  );
});

// GET todos/1234567 where the numbers will be a var
app.get('/todos/:id', (req, res) => {
  //console.log('ID ', req.params);
  let id = req.params.id;

  //is the passed id valid?
  if (!ObjectID.isValid(id)) {
    console.log('your id is not valid');
    return res.status(404).send('Not a valid ID');
  }

  Todo.findById(id)
    .then(todo => {
      if (!todo) {
        //return console.log('Id not found');
        return res.status(404).send('Not found');
      }
      //console.log('Todo by id', todo);
      res.status(200).send({ todo: todo });
    })
    .catch(error => {
      //console.log('Opps', error);
      res.status(400).send('opps');
    });
});

app.listen(port, () => {
  console.log(`Starting up on port ${port} sir`);
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
