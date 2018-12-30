//to start mongo sever
// cd /Users/peterstema/mongo/bin
// ./mongod --dbpath ~/mongo-data

//to connect
// ~/mongo/bin
// ./mongo
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb'); //https://mongodb.github.io/node-mongodb-native/

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, client) => {
    //return stops code from going forward in case of error
    if (error) {
      return console.log('Unable to connect MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany
    // db.collection('Todos')
    //   .deleteMany({ text: 'Something I need to do' })
    //   .then(result => {
    //     console.log(result);
    //   });

    //deleteOne
    // db.collection('Todos')
    //   .deleteOne({
    //     text: 'Go for a walk'
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });

    //finOneAndDelete
    //gets deleted data back when deleting
    // db.collection('Todos')
    //   .findOneAndDelete({
    //     _id: "5c27aa8957d02c9854bdefd7" //id: new ObjectID('"5c27aa8957d02c9854bdefd7")
    //   })
    //   .then(result => {
    //     console.log(result);
    //   });

    db.collection('Todos')
      .deleteMany({ text: 'read a book' })
      .then(response => {
        console.log(response);
      });

    // db.collection('Users')
    //   .find({ name: 'Peter Stema' })
    //   .toArray()
    //   .then(
    //     document => {
    //       console.log('Data:', document);
    //     },
    //     error => {
    //       console.log('Unable to connect', error);
    //     }
    //   );

    //client.close();
  }
);

//node mongodb-find.js
