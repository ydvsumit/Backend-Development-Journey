const fs = require("fs");

const readable = fs.createReadStream("../1-Fundamentals/content/bigFile.txt", {
  encoding: "utf8",
});

readable.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readable.on("end", () => {
  console.log("File reading completed");
});
