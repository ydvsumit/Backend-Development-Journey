// Import http module
const http = require("http");

// Create server
const server = http.createServer((req, res) => {
  // Set response headers
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send response body
  res.end("Hello NodeJS 😃");
});

// Server listens on port 3000
server.listen(3000, () => {
  console.log("Server listening on port: 3000");
});
