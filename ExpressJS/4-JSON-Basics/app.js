const express = require("express");
const { products, persons } = require("./data");

const app = express();

/**
 * 🔹 What is res.json()?
 *    • res.json() is a response method in Express that sends JSON data to the client.
 *    • It automatically converts a JavaScript object or array into a JSON string and sets the Content-Type header to application/json.
 *
 * 🔹 Syntax:
 *            • res.json([body])
 *            • body → the JavaScript object or array you want to send.
 */
app.get("/", (req, res) => {
  res.json(products);
});

app.get("/persons", (req, res) => {
  res.json(persons);
});

app.get("/api/persons", (req, res) => {
  res.json([{ name: "Sumit" }, { name: "Nilesh" }]);
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
