const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    // Collect chunks
    req.on("data", (chunk) => {
      body += chunk.toString(); // convert buffer to string
    });

    // When all chunks received
    req.on("end", () => {
      console.log("Data received from client:", body);

      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data received successfully!");
    });

    // Handle errors
    req.on("error", (err) => {
      console.error("Error while receiving data:", err);
    });
  } else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Send a POST request with some data!");
  }
});

server.listen(5000, () =>
  console.log("Server running at http://localhost:5000")
);
