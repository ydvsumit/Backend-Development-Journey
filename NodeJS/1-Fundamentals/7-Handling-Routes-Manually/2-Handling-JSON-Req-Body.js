/**
 * 2. Handling JSON Request Body (POST)
 * For POST routes, you often need request data. Node.js streams request bodies → you must collect chunks.
 */
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/data") {
    let body = "";

    // Collect data chunks
    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    // Finished receiving data
    req.on("end", () => {
      const parsed = JSON.parse(body); // convert JSON string to object
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ message: "✅ Data received", data: parsed }));
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.end("Use POST /data to send JSON");
  }
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);
