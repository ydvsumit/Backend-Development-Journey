const { readFile, writeFile, read } = require("fs");

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
        console.log(err);
      }
    );
  });
});
