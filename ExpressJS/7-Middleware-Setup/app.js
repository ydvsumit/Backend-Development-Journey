/**
 * 🔹 What is Middleware in ExpressJS?
 *    - In simple words 👇
 *      • Middleware are functions that run between the request (from the client) and the response (from the server).
 *      They can:
 *          • Modify or check the request before it reaches your route (like /users),
 *          • Or modify the response before sending it back to the client.
 *
 * 🔹 Think of it like:
 *                    • “Middleware = a checkpoint between request and response.”
 * ⭐ Every request passes through one or more middleware functions before it gets a final response.
 *
 * 🔹 Order of Middleware:
 *    • Middleware functions run in the order they are defined in your code
 *    • So always put global ones (like logging or express.json()) at the top.
 *
 * ✅ In short:
 *              • Middleware in ExpressJS are functions that handle requests before they reach your routes or before sending the final response
 *              • They help with things like logging, authentication, data parsing, error handling, and security.
 */
const express = require("express");
const app = express();

//req => middleware => res

const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  next(); // pass control to next middleware or route
};

// Here, we can directly pass logger middleware to the route  instead of invoking like function and we don't need to pass parameters because express middleware automatically detect these parameters.
app.get("/", logger, (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
