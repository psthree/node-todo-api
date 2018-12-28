//to start mongo sever
// cd /Users/peterstema/mongo/bin
// ./mongod --dbpath ~/mongo-data

//to connect
// ~/mongo/bin
// ./mongo
// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (error, client) => {
    //return stops code from going forward in case of error
    if (error) {
      return console.log('Unable to connect MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something I need to do',
    //     completed: false
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log('Unable to insert todo', error);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    db.collection('Users').insertOne(
      {
        Name: 'Peter Stema',
        age: 60,
        location: 'Madison Heights'
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert users', error);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
      }
    );
    client.close();
  }
);
