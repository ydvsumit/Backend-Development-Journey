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

// Parse JSON
app.use(express.json());

// Read Data
app.get("/api/persons", (req, res) => {
  res.status(200).json({ success: true, data: persons });
});

// create or insert data - even thoug we are handling a form submisstion but not handling json data
// Yes, we know that how to handle json data by using .json({}) But we are not handling the Incoming JSON Data.
// And this is where another middleware comes into play, So I'm gonna say parse json here
app.post("/api/persons", (req, res) => {
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

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
