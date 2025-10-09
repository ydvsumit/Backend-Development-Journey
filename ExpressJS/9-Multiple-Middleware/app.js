const express = require("express");
const logger = require("./middleware/logger");
const { authorize, authorizeByUser } = require("./middleware/authorize");

const app = express();

// The way we execute multiple middleware functions in app.use(), we simply place them in an array.
// Here, order of middleware matters, because they will be executed in the order.
// app.use([logger, authorize]);
app.use([logger, authorizeByUser]);

app.get("/", (req, res) => {
  res.send("Home Page of ExpressJS");
});

app.get("/api", (req, res) => {
  res.send("API Page of ExpressJS");
});

app.get("/api/about", (req, res) => {
  console.log(req.user);
  res.send("About Page of ExpressJS");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page of ExpressJS");
});

app.get("/api/documents", (req, res) => {
  res.send("Documents Page of ExpressJS");
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
