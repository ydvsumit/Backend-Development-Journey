/**
 * 🔹 What is a Controller in ExpressJS?
 *    - A controller in ExpressJS is a function (or group of functions) that contains the logic for handling requests and responses for a specific route.
 *
 * In short —
 *            👉 Controllers decide what happens when someone hits a route — like what data to fetch, what to return, or what message to show.
 *
 * 🧠 Think of it like this:
 *                          • Routes → decide “which URL should do what”
 *                          • Controllers → decide “what actually happens when that URL is hit”
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
