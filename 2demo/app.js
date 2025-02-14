const http = require('http');

const express = require('express'); // import express

const app = express(); // store express in a const by calling the express as a function

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello from Express</h1>');
});
const server = http.createServer(app); // pass app as the paramete to the createServer function

server.listen(3010);
