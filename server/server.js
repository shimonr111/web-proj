const express = require("express"); // import express.js framework
const app = express(); // create express application instance
const cors = require("cors"); // import CORS mechanism
const JSONdb = require("simple-json-db"); // import 'simple-json-db' package
const db = new JSONdb("db.json"); // create instance of db to read and write JSON data

app.use(cors()); // enabling CORS mechanism for all routes in my app
app.use(express.json()); // Middleware to parse JSON request bodies

// ***********This request received from GetData Route***********
// GET method is activated when it requested from the client side with the "get_users" endpoint
app.get("/get_users", (req, res) => {
  const usersArray = db.get("users"); // get the users arr from the db
  res.send(usersArray); // send it back to the client side
});

// ***********This request received from EditData Route***********
// POST method is activated when it requested from the client side with the "edit_user" endpoint
app.post("/edit_user", (req, res) => {
  const userName = req.body.newValue; // received name of the user from the client side, and store it
  const usersArray = db.get("users"); // get the users arr from the db
  const userToUpdate = usersArray.find((user) => user.name == userName); // find the object that has this name
  // if there is user with that name, edit his details
  if (userToUpdate) {
    userToUpdate.age = 20;
  }
  db.set("users", usersArray); // set the updated users array in the db
  res.send("User details edited successfully!"); // send response back to the client
});

// ***********This request received from AddData Route***********
// POST method is activated when it requested from the client side with the "add_user" endpoint
app.post("/add_user", (req, res) => {
  const userName = req.body.newValue; // received name of the user from the client side, and store it
  const usersArray = db.get("users"); // get the users arr from the db
  const newUser = {
    id: 4,
    name: userName,
    age: 23,
  };
  usersArray.push(newUser); // add the new user to the array
  db.set("users", usersArray); // set the updated users array in the db
  res.send("User added successfully!"); // send response back to the client
});

// ***********This request received from DeleteData Route***********
// POST method is activated when it requested from the client side with the "delete_user" endpoint
app.post("/delete_user", (req, res) => {
  const userName = req.body.newValue; // received name of the user from the client side, and store it
  const usersArray = db.get("users"); // get the users arr from the db
  const indexToDelete = usersArray.findIndex((user) => user.name == userName); // find the index of the user
  // if user with that name exist in the db
  if (indexToDelete !== -1) {
    usersArray.splice(indexToDelete, 1);
    db.set("users", usersArray); // set the updated users array in the db
    res.send("User deleted successfully");
  }
  res.send("User not found");
});

// Express is listening for incoming requests on port 8080
app.listen(8080, () => {
  console.log("server listening on port 8080");
});
