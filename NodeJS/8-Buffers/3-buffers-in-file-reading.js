// Buffers in File Reading
// When you read a file using fs, Node reads chunks of data into Buffers:
const fs = require("fs");

const stream = fs.createReadStream("./file.txt");

stream.on("data", (chunk) => {
  console.log("Received buffer:", chunk);
  console.log("As string:", chunk.toString());
});
// This reads the file in chunks, each chunk being a Buffer object.

// ----------------------------------------------------------You can specify the encoding when creating the read stream to get strings directly-----------------------------------------------
const stringStream = fs.createReadStream("./file.txt", { encoding: "utf8" });
stringStream.on("data", (chunk) => {
  console.log("Received string:", chunk);
});

// If you need to process binary data, you can work directly with the Buffer objects.
// For example, you can concatenate buffers or manipulate binary data as needed.
// This is useful for handling images, audio files, or any non-text data.
// Always remember to handle the 'end' event to know when the file has been completely read:
stringStream.on("end", () => {
  console.log("Finished reading the file.");
});

// You can also handle errors during file reading:
stringStream.on("error", (err) => {
  console.error("Error reading the file:", err);
});

// This ensures robust file reading with proper error handling.
// Buffers are essential for efficient file I/O operations in Node.js.
// They allow you to work with raw binary data, making Node.js suitable for a wide range of applications.

// ----------------------------------------------------------------Example using fs.promises to read a file into a buffer------------------------------------------------------------------------
// For more advanced use cases, you can also use the 'fs.promises' API with async/await for cleaner code.
async function readFileToBuffer(filePath) {
  try {
    const data = await fs.promises.readFile(filePath);
    console.log("File data as buffer:", data);
    console.log("File data as string:", data.toString());
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileToBuffer("./file.txt"); // Call the function to read the file as a buffer

// This approach is often more convenient for modern JavaScript development.
// It leverages Promises and async/await for better readability and error handling.
// This code demonstrates various ways to read files using Buffers in Node.js.
// Buffers are a powerful feature in Node.js for handling binary data efficiently.
// They are widely used in file I/O, networking, and other scenarios where raw data manipulation is required.
// This ensures you stay up-to-date with the evolving Node.js ecosystem.
