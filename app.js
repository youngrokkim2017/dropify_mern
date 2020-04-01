// give this file to node 
// node will be the interpreter and read through the JS
// want to create a simple server using express
const express = require('express');
// create app object
const app = express();
const mongoose = require('mongoose');
// get URI
const db = require('./config/keys').mongoURI; // this gives back an object
// get user router
const users = require('./routes/api/users');

// have mongoose connect to the URI
mongoose
    .connect(db, { useNewUrlParser: true }) // .connect returns a promise
    .then(() => console.log('connected to mongoDB'))
    .catch(err => console.log(err)); // catch any errors

// app is 'listening' for get requests
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// if the route matches, then use the object
app.use('/api/users', users);

// need to tell the app object to listen on a given port
const port = process.env.PORT || 5000;

// tell the app to listen
app.listen(port, () => {
    console.log(`listenting on port ${port}`)
});