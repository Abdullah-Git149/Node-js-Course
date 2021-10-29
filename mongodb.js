// Create CRUD operations
// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectId

const { MongoClient, ObjectId } = require("mongodb");
// const id = new ObjectId();
// console.log(id);

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-managerr";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect");
    }
    const db = client.db(databaseName);
    // Inserting single data =====================
    // db.collection("users").insertOne(
    //   {
    //     _id: id,
    //     name: "Kabir",
    //     age: 20,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert user");
    //     }
    //     console.log(result.ops);
    //   }
    // );
    // Inserting many documens =============
    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Zain",
    //       age: 19,
    //     },
    //     {
    //       name: "Muzammil",
    //       age: 21,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       return console.log("unable to insert documents!!");
    //     }
    //     console.log("succesfully inserted documents", result.ops);
    //   }
    // );
    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Went to market",
    //       completed: true,
    //     },
    //     {
    //       description: "Went to Garden",
    //       completed: false,
    //     },
    //     {
    //       description: "Went to Masjid",
    //       completed: true,
    //     },
    //   ],
    //   (error, result) => {
    //     if (error) {
    //       console.log("Can't put data");
    //     }
    //     console.log("Successfully inserted");
    //   }
    // );

    // Finding the user in database ===============
    // db.collection("users").findOne({ _id: new ObjectId("616c1b1493291b9c469516ac")}, (error, user) => {
    //   if (error) {
    //     console.log("Unable to find the user");
    //   }
    //   console.log("The user is", user);
    // });
    // Finding multple users in data ===========
    // db.collection("users")
    //   .find({ age: 20 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection("tasks").findOne(
    //   { _id: new ObjectId("616c259d811df0e52a086744") },
    //   (error, task) => {
    //     if (error) {
    //       console.log("unable to find task");
    //     }
    //     console.log(task);
    //   }
    // );

    // db.collection('tasks').find({completed:true}).count((error,task)=>{
    //   if(error){
    //     console.log("unable to find")
    //   }
    //   console.log(task)
    // })
    // updateing the data =============
    // db.collection("users")
    //   .updateOne(
    //     { _id: new ObjectId("616c1b98f47cfa2c5d4e542d") },
    //     {
    //       $set: {
    //         name: "Imran",
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Updating multiple data  =============
    // db.collection("tasks")
    //   .updateMany(
    //     { completed: true },
    //     {
    //       $set: {
    //         completed: false,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result.modifiedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // deleting multiple data ===========
    // db.collection("users")
    //   .deleteMany({ age: 20 })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // delete single data  ===========
    // db.collection("tasks")
    //   .deleteOne({ description: "Went to market" })
    //   .then((result) => {
    //     console.log(result.deletedCount);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }
);
