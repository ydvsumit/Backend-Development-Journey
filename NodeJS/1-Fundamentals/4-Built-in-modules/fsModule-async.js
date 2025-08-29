const { readFile, writeFile } = require("fs");

console.log(
  "Asynchronously starts the task with non-blocking nature that means it pick the task and doing task behind the scene and offload this task and take new task"
);
readFile("../content/first.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

writeFile("../content/test-async.txt", "Hey Node !!", (err) => {
  if (err) {
    console.log(err);
    throw err;
  }
});

readFile("../content/second.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }
  const second = data;

  readFile("../content/test-async.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    }
    const test = data;

    writeFile(
      "../content/result-async.txt",
      `Here is the result: ${test}, ${second}`,
      (err) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done this asynchronous task");
      }
    );
  });
});

console.log("starting next task");
