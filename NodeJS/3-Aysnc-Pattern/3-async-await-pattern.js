const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

// approach with async and awat
const start = async () => {
  const first = await getText("../1-Fundamentals/content/first.txt");
  console.log(first);
};

start();

// approach with try and catch block because if something goes wrong then we can a little bit control over it
const startTryCatch = async () => {
  try {
    const first = await getText("../1-Fundamentals/content/first.txt");
    const second = await getText("../1-Fundamentals/content/second.txt");
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

startTryCatch();

// getText("../1-Fundamentals/content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
