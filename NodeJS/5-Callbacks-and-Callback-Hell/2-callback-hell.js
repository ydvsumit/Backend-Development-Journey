/**
 * Callback Hell:
 *              - Callback Hell happens when you have too many nested callbacks, making code look like a pyramid of doom.
 *              - It’s hard to read, maintain, and debug.
 */
const fs = require("fs").promises;

fs.readFile("../1-Fundamentals/content/first.txt", "utf8", (err, data1) => {
  if (err) throw err;
  fs.readFile("../1-Fundamentals/content/second.txt", "utf8", (err, data2) => {
    if (err) throw err;
    fs.readFile("../1-Fundamentals/content/first.txt", "utf8", (err, data3) => {
      if (err) throw err;
      console.log(data1, data2, data3);
    });
  });
});

/**
 * How to avoid callback hell ?
 * 1. Modularize callbacks → move them into named functions.
 * 2. Use Promises → cleaner .then() chaining.
 * 3. Use async/await → looks like synchronous code.
 */

async function readFiles() {
  try {
    const data1 = await fs.readFile("file1.txt", "utf8");
    const data2 = await fs.readFile("file2.txt", "utf8");
    const data3 = await fs.readFile("file3.txt", "utf8");
    console.log(data1, data2, data3);
  } catch (err) {
    console.error("Error:", err);
  }
}

readFiles();
