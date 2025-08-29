const { readFile } = require("fs");

console.log("started a first task");

// CHECK FILE PATH !!!!
readFile("../1-Fundamentals/content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
  console.log("completed first task");
});

console.log("starting next task");
