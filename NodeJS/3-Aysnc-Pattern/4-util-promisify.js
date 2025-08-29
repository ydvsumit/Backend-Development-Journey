// Instead of defining promise, we can wrap promises in a built in module method prmosify

const { readFile, writeFile } = require("fs");

// Also if we can add .promises in the end of require("fs"), then we don't need define util.promisify(readFile/writeFile)
// const { readFile, writeFile } = require("fs").promises;
// Then we can directly use readFile/writeFile, it behaves same as util.promisify

const util = require("util");

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

// approach with async and awat
const start = async () => {
  const first = await readFilePromise(
    "../1-Fundamentals/content/first.txt",
    "utf8"
  );
  console.log(first);

  await writeFilePromise(
    "../1-Fundamentals/content/subfolder/writeFile1.txt",
    "Hello from newly created file1 by writeFilePromise"
  );
};

start();

// approach with try and catch block because if something goes wrong then we can a little bit control over it
const startTryCatch = async () => {
  try {
    const first = await readFilePromise(
      "../1-Fundamentals/content/first.txt",
      "utf8"
    );
    const second = await readFilePromise(
      "../1-Fundamentals/content/second.txt",
      "utf8"
    );
    console.log(first, second);

    await writeFilePromise(
      "../1-Fundamentals/content/subfolder/writefile2.txt",
      "Hello from newly created file2 by writeFilePromise"
    );
  } catch (error) {
    console.log(error);
  }
};

startTryCatch();

writeFilePromise(
  "../1-Fundamentals/content/subfolder/writefile3.txt",
  "Hello from newly created file3 by writeFilePromise"
);
