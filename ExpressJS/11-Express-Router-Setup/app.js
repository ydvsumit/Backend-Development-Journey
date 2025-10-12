/**
 * 🔹 What is Express Router?
 *    - Express Router is a mini version of an Express app, used to organize your routes into separate files or modules.
 *
 * In simple words —
 * 👉 It helps you split your big Express app into smaller parts (like routes for users, products, orders, etc.)
 *    so your code becomes clean, modular, and easy to manage.
 *
 * 🔹 Why do we need it?
 *    - When your project grows, putting all routes in one server.js or app.js file becomes messy.
 *    - That’s where express.Router() helps — it lets you create separate route files.
 */
const express = require("express");
const person = require("./routes/person");
const auth = require("./routes/auth");

const app = express();

/**
 * express.json() is a middleware that helps Express read and understand JSON data sent by the client in HTTP requests (like POST or PUT).
 * Without it, req.body would be undefined.
 */
app.use(express.json()); // middleware to parse JSON body

app.use("/login", auth);
app.use("/api/persons", person);

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
