/**
 * - Handles continuous flow of data (chunk by chunk) instead of loading everything at once.
 * - Efficient for large files, video/audio streaming.
 * - More about stream is in 5-Streams section
 */
const fs = require("fs");

const readStream = fs.createReadStream("../content/first.txt", "utf8");

readStream.on("data", (chunk) => {
  console.log("Received chunk:", chunk);
});

readStream.on("end", () => {
  console.log("File reading complete.");
});
