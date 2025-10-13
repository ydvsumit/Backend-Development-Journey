const express = require("express");
const morgan = require("morgan"); // third-party middleware for logging
const cors = require("cors"); // third-party middleware for cross-origin requests

const app = express();

// Use third-party middlewares
app.use(morgan("dev")); // logs each request to the console
app.use(cors()); // allows requests from other domains (CORS)

// Route
app.get("/", (req, res) => {
  res.send("Hello from Express with third-party middleware!");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
