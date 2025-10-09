/**
 * 🔹 What is app.use() in ExpressJS?
 *    - app.use() is a method to register middleware functions in your Express app.
 *
 * In other words —
 *          • 👉 It tells Express what function to run whenever a request comes in.
 *          • These functions can handle things like logging, authentication, data parsing, etc.
 *
 * 🔹 Syntax:   app.use([path], middlewareFunction)
 *            • path (optional) → the URL path for which the middleware should run.
 *            • middlewareFunction → the function that handles the request.
 */

const express = require("express");
const logger = require("./middleware/logger");
const requestRecieved = require("./middleware/requestRecieved");

const app = express();

app.use(logger);

// 📌 This middleware runs only for routes that start with /users,
// like /users, /users/123, etc.
app.use("/users", requestRecieved);
/**
 * Two important thing that we need to take care:
 * 🔹 Here, if i want to apply middleware in all route at one time instead of putting in every route individually,
 *    I need to use method app.use() and inside it I need to pass middleware and also in this invoking this method at which place and order matters.
 *    if we apply this method after one route or two route it will leave the above routes and started applying on next routes that declared after the app.use() statement.
 *
 * 🔹 in app.use(path, middleware), we can give path that means, suppose that if give path like this "/api", that means any route that starts with /api it will automatically apply but we have to declare app.use() at top of the code.
 * 🔹 in app.use(middleware), it's apply bydefault to all routes (not a start with any specific path).
 *
 * 🔹 How it Works Internally
 *    🔴 When a request comes in:
 *        • Express checks all middlewares registered with app.use().
 *        • If the path matches (or if no path is defined, it matches all).
 *        • It executes the middleware in the order they are defined.
 *        • Each middleware calls next() to move to the next one.
 */
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/api/about", (req, res) => {
  res.send("About Page");
});

app.get("/api/products", (req, res) => {
  res.send("Products Page");
});

app.get("/api/items", (req, res) => {
  res.send("Items Page");
});

app.get("/api/documents", (req, res) => {
  res.send("Documents Page");
});

// Here, if you see requestRecieved middleware applied but not for other routes, even logger middleware is apply on all routes
app.get("/users", (req, res) => {
  res.send("Users Page");
});

app.listen(5000, () => {
  console.log("Serve is running on port: 5000");
});
