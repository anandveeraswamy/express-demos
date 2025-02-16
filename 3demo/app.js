const express = require('express'); // import express

const app = express(); // store express in a const by calling the express as a function

app.use('/', (req, res, next) => {
    console.log("This always runs");  
    next();  
});

app.use('/add-product', (req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>The add product page</h1>');
});

app.use((req, res, next) => {
    console.log("In yet another middleware!");
    res.send('<h1>Hello from Express</h1>');
});

app.listen(3000);

/*
Note that we have deleted the http import statement at the top: const http = require('http');
And we have replace the following two lines:
    const server = http.createServer(app); // pass app as the paramete to the createServer function
    server.listen(3010);
with just 
    app.listen(3000);
*/
