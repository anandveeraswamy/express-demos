# Express.js Demo Setup

## Steps to Set Up the Express App

### 1. Start from the `app.js` file generated at the end of **demo1**
- Make sure you install the required dependencies:
  ```sh
  npm install express nodemon
  ```
- Modify the `package.json` file to use **nodemon** for development:
  ```json
  "scripts": {
    "start": "nodemon app.js"
  }
  ```

### 2. Modify `app.js` to Use Express Middleware

Update your `app.js` file with the following code:

```javascript
const http = require('http');
const express = require('express'); // Import express

const app = express(); // Store express in a constant

app.use((req, res, next) => {
    console.log('In the middleware');
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req, res, next) => {
    console.log("In another middleware!");
    res.send('<h1>Hello from Express</h1>'); // Added this
});

const server = http.createServer(app); // Pass 'app' to the createServer function

server.listen(3010);
```

### 3. Run and Test the Application
- Start the server using:
  ```sh
  npm start
  ```
- Open your browser and navigate to `http://localhost:3010/`. You should see:

  ```
  Hello from Express!
  ```

- Check the **Network** tab in the browser developer tools. You will see that the `Content-Type` is automatically set to `text/html` by Express.

### 4. Explanation
- The first middleware logs `"In the middleware"` and calls `next()` to pass control to the next middleware.
- The second middleware logs `"In another middleware!"` and sends a response `<h1>Hello from Express</h1>`.
- The response is automatically set to `text/html` by Express.

### 5. Notes
- **nodemon** automatically restarts the server when you make changes to `app.js`.
- The server listens on **port 3010**.
- Express handles setting `Content-Type` automatically.

Enjoy coding with Express.js!
