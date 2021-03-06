const path = require('path');
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// Following code allows our React and Node app to be deployed together on the same domain.
//// This code will first allow Node to access our built React project using the express.static function for static files.
//// And if a GET request comes in that is not handled by our /api route, our server will send back to our React app.

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// go and  tell our Node App how to do that by adding a build script to our server package.json file that builds our React app for production 