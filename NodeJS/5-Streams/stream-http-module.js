const http = require("http");
const fs = require("fs");

/**
 * pipe() method: It is pushing from the read stream into write stream.
 *  - So you can imagine that if we can read data in chunks, we can also write data in chunks.
 *  - And what happens under the hood response object can be set up as a writable stream.
 */

http
  .createServer((req, res) => {
    // const text = fs.readFileSync(
    //   "../1-Fundamentals/content/bigNewFile.txt",
    //   "utf8"
    // );
    // res.end(text);
    const fileStream = fs.createReadStream(
      "../1-Fundamentals/content/bigNewFile.txt",
      "utf8"
    );
    fileStream.on("open", () => {
      fileStream.pipe(res); // instead of res.end(text)
    });
    fileStream.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(5000);
