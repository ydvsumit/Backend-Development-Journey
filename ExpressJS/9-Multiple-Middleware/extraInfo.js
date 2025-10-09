const express = require("express");
const logger = require("./middleware/logger");
const { authorizeByUser } = require("./middleware/authorize");
const morgan = require("morgan");

const app = express();

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Home Page of ExpressJS");
});

app.get("/api", (req, res) => {
  res.send("API Page of ExpressJS");
});

app.get("/api/about", (req, res) => {
  res.send("About Page of ExpressJS");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page of ExpressJS");
});

app.get("/api/documents", (req, res) => {
  res.send("Documents Page of ExpressJS");
});

/**
 * 1. use vs route - (if we want to apply multiple middleware in a single route instead of apply all, we can pass into a individual route also and others are working fine as usual)
 * 2. options -
 *              • our own - creating our own middleware that we had done just now and before
 *              • express - built-in middleware function in express, in this case we don't have to worry about functionality, for example: express.static(), express.json() etc.
 *              • third party - this type of middleware, we have to install it. For example: morgan, cors from npm.js etc.
 */

app.get("/api/items", [logger, authorizeByUser], (req, res) => {
  console.log(req.user);
  res.send("Items Page of ExpressJS");
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
