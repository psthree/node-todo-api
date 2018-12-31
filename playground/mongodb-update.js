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
    // db.collection('Todos')
    //   .findOneAndUpdate(
    //     {
    //       _id: new ObjectID('5c225df2c0999bb78653c7eb')
    //     },
    //     {
    //       $set: {
    //         completed: true
    //       }
    //     },
    //     {
    //       returnOriginal: false
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   });
    db.collection('Users')
      .findOneAndUpdate(
        {
          _id: new ObjectID('5c22617a88c4ecb7f8ea2389')
        },
        {
          $set: {
            name: 'Peter'
          },
          $inc: {
            age: 1
          }
        },
        {
          returnOriginal: false
        }
      )
      .then(result => {
        console.log(result);
      });

    //client.close();
  }
);

//node mongodb-find.js
