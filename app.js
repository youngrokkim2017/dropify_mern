// give this file to node 
// node will be the interpreter and read through the JS
// want to create a simple server using express
const express = require('express');
// create app object
const app = express();

// app is 'listening' for get requests
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// need to tell the app object to listen on a given port
const port = process.env.PORT || 5000;

// tell the app to listen
app.listen(port, () => {
    console.log(`listenting on port ${port}`)
});