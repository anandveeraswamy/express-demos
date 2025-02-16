# Node.js Project Tutorial

This tutorial demonstrates how to:

1. Initialize your Node.js project
2. Analyze the `package.json` file (the configuration file for your project)
3. Modify `package.json` to include a start script
4. Install development dependencies
5. Install production dependencies
6. Use `nodemon` to automatically restart your server when changes are made
7. Use Express middleware and chain middlewares

## Step 0: Create a Simple `app.js` File

Create an `app.js` file with the following contents:

```
const http = require('http');
console.log("Hello world");
```

## Step 1: Initialize Your Node.js Project

Run the following command in the terminal:
```
npm init
```
This will generate a `package.json` file, which is a configuration file for your project. It should look like this:

```
{
  "name": "1demo",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Anand Veeraswamy",
  "license": "ISC",
  "description": ""
}
```

## Step 2: Add a Start Script

Modify the `scripts` section of `package.json` to include:

```
{
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  }
}
```

## Step 3: Install Express (Production Dependency)

Run the following command:
```
npm install --save express
```
This will add Express as a production dependency in `package.json`:

```
{
  "dependencies": {
    "express": "^4.21.2"
  }
}
```

## Step 4: Import and Use Express

Update `app.js` with the following content:

```
const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);

server.listen(3000);
```

## Step 5: Install `nodemon` (Development Dependency)

To automatically restart the server when changes are made, install `nodemon` as a development dependency:

```
npm install --save-dev nodemon
```

Modify the `scripts` section in `package.json` to use `nodemon`:

```
{
  "scripts": {
    "start": "nodemon app.js"
  }
}
```

Now, running `npm start` will use `nodemon` to monitor your project.

## Step 6: Add Express Middleware

Update `app.js` to include middleware:

```
const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
});

const server = http.createServer(app);
server.listen(3004);
```

Run `npm start`, and you should see `In the middleware!` printed in the console when making requests.

## Step 7: Add Another Middleware

Modify `app.js` as follows:

```
app.use((req, res, next) => {
    console.log('In the middleware!');
});

app.use((req, res, next) => {
    console.log('In another middleware');
});
```

Restart the server and observe that only the first message (`In the middleware!`) appears. This happens because the request never moves to the next middleware.

## Step 8: Use `next()` to Chain Middleware

Modify `app.js` again:

```
app.use((req, res, next) => {
    console.log("In the middleware");
    next();
});

app.use((req, res, next) => {
    console.log("In another middleware!");
});
```

Now both middleware functions execute because `next()` is called in the first middleware.

## Conclusion

You have successfully:
- Initialized a Node.js project
- Installed and used Express
- Configured `nodemon` for automatic server restarts
- Implemented middleware in Express

Happy coding! 🚀

