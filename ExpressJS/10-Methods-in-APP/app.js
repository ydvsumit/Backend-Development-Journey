// Note: why we write two html file in method-public folder because we we cannot simply just configure our browser to perfomr a POST request,
// We either need to use a tool like Postman etc or we need to setup basically a working application.
const express = require("express");
let { persons } = require("../Common-Data/data");

const app = express();

// 1. static assets
app.use(express.static("./method-public"));

// app.post():=> How to add new name in persons list, this is where middleware comes in, In order to get to add data we need urlEncoded middleware.
// So I'll add here to Parse Form Data
// urlencoded: This is a built-in middleware function in express. It parses incoming requests with urlencoded payloads and is based on body-parser.
app.use(express.urlencoded({ extended: false }));

/**
 * 🔹 What is express.json()?
 *    - express.json() is a built-in middleware in ExpressJS that helps your app understand JSON data sent in the body of an HTTP request.
 *
 * In short —
 *            👉 It parses incoming JSON data and makes it available in req.body.
 *
 * 🔹 Why do we need it?
 *    - When a client (like Postman or a frontend app) sends data to the server using JSON format,
 *      for example:
 *                  {
 *                    "name": "Sumit",
 *                    "age": 23
 *                  }
 *      • By default, Express can’t read this JSON data.
 *      • So we use express.json() middleware to parse it into a JavaScript object.
 * 🔹 Syntax: app.use(express.json());
 * 📌 You usually put it at the top of your app, before defining routes.
 *
 * 🔴 Without express.json() :=> req.body → undefined ❌
 * 🔴 With express.json() :=> req.body → { key: "value"} ✅
 *
 * 🔹 What it does internally
 *    • Checks if the incoming request has a header Content-Type: application/json.
 *    • If yes, it reads the JSON data from the body.
 *    • Then it converts it into a JavaScript object and attaches it to req.body.
 *
 * ✅ In short:
 *              express.json() is a middleware that helps Express read and understand JSON data sent by the client in HTTP requests (like POST or PUT)
 *              Without it, req.body would be undefined.
 */
app.use(express.json());

//-------------------------------------------------------Routes----------------------------------------------------------------------------------
// Read Data
app.get("/api/persons", (req, res) => {
  res.status(200).json({ success: true, data: persons });
});

// create or insert data - even thoug we are handling a form submisstion but not handling json data
// Yes, we know that how to handle json data by using .json({}) But we are not handling the Incoming JSON Data.
// And this is where another middleware comes into play, So I'm gonna say parse json here
app.post("/api/persons", (req, res) => {
  console.log(req.body); // now you can access JSON data by above middleware express.json()
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, personName: name });
});

// Insert Data - How we can add data on server or how we can insert data, and in order to do that we need to use POST Method
// we have a two flavors of POST method to insert data (1-static middleware, 2-Postman Tool)
app.post("/login", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Valid Credentials");
});

// 2. Using Postman Tool, we can insert data
app.post("/api/postman/persons", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: "Please provide name value" });
  }
  res.status(201).json({ success: true, data: [...persons, name] });
});

// 3. PUT - update the data
app.put("/api/persons/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  console.log(`id: ${id} & name: ${name}`);

  const people = persons.find((person) => {
    return person.id === Number(id);
  });
  console.dir(people, { depth: null });

  if (!people) {
    return res
      .status(404)
      .json({ success: false, msg: `no people found with id: ${id}` });
  }

  const newPeople = persons.map((person) => {
    if (person.id === Number(id)) {
      person.name = name;
    }
    return person;
  });
  res.status(200).json({ success: true, data: newPeople });
});

// 4. DELETE - delete a data
app.delete("/api/persons/:id", (req, res) => {
  const people = persons.find((person) => person.id === Number(req.params.id));

  if (!people) {
    return res.status(404).json({
      success: false,
      msg: `no people found with id: ${req.params.id}`,
    });
  }
  const newPeople = persons.filter(
    (person) => person.id !== Number(req.params.id)
  );
  res.status(200).json({ success: true, data: newPeople });
});

// listening server on port 5000
app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
