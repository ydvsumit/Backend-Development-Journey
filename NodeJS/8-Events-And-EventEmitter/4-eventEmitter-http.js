/**
 *  using EventEmitter inside an HTTP server
 * 🔹 How it works:
 *                  • A custom EventEmitter myEmitter is created.
 *                  • Every time a request comes to the server, we emit the "userVisited" event.
 *                  • We subscribe to "userVisited" using .on(), which logs the URL to the console.
 *                  • The server still sends a normal HTTP response to the client.
 *
 * 🔹 Why this is powerful:
 *                          • You can decouple logic: HTTP handling vs logging vs analytics.
 *                          • Any module can listen to events without modifying the server code.
 *                          • This is the foundation of Node.js’s event-driven architecture.
 */
const http = require("http");
const EventEmitter = require("events");

// 1️⃣ Create a custom EventEmitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// 2️⃣ Subscribe to a custom event
myEmitter.on("userVisited", (url) => {
  console.log(`New user visited: ${url}`);
});

// 3️⃣ Create HTTP server
const server = http.createServer((req, res) => {
  // Emit event when user makes a request
  myEmitter.emit("userVisited", req.url);

  // Send response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello! Your visit is recorded.");
});

// 4️⃣ Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
