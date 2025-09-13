const fs = require("fs");

const writable = fs.createWriteStream("../1-Fundamentals/content/output.txt");

writable.write("Hello ");
writable.write("World!");
writable.end(() => {
  console.log("Finished writing to file");
});
