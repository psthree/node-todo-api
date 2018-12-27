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

    console.log('Connected to MongDB server');
    const db = client.db('TodoApp');
    //get some info
    //find is a cursor
    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5c212888ee5d288eea8b3a87') })
    //   .toArray()
    //   .then(
    //     document => {
    //       console.log('document');
    //       console.log(JSON.stringify(document, undefined, 2));
    //     },
    //     error => {
    //       console.log('Unable to connect', error);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log('Todos count:', count);
    //     },
    //     error => {
    //       console.log('Unable to connect', error);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Peter Stema' })
      .toArray()
      .then(
        document => {
          console.log('Data:', document);
        },
        error => {
          console.log('Unable to connect', error);
        }
      );

    client.close();
  }
);

//node mongodb-find.js
