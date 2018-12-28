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
    db.collection('Todo')
      .deleteMany({ text: 'XXX' })
      .then(result => {
        console.log(result);
      });

    //deleteOne

    //finOneAndDelete

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
