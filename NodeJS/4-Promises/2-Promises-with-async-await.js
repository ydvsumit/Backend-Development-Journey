// Promises with Async Operations → reading a file with fs.promises:

const fs = require("fs").promises;

fs.readFile("../1-Fundamentals/content/first.txt", "utf8")
  .then((data) => {
    console.log("File contents:", data);
  })
  .catch((err) => {
    console.error("Error reading file:", err);
  });
