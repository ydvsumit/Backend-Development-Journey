/**
 * Advanced Node.js HTTP server example that uses EventEmitter with:
 *    • .on() for regular events
 *    • .once() for one-time events
 *    • Event parameters
 * This simulates real-world use cases like logging, analytics, and notifications.
 *
 * 🔹 How it works:
 *                  • userVisited → logs every request with URL and HTTP method.
 *                  • firstVisit → triggers only once, useful for things like initial setup or first-time notifications.
 *                  • notifyAdmin → simulates notifying another system or service.
 *
 * 🔹 Test it in browser/postman:
 *                                • http://localhost:3000/home
 *                                • http://localhost:3000/about
 *                                • http://localhost:3000/contact
 *
 * Notice:
 *        • firstVisit only fired for the first request (/home)
 *        • Other events fire every time.
 *
 * 🔹 Why this is useful:
 *    • Event-driven design separates concerns:
 *        • Logging
 *        • Analytics
 *        • Notifications
 *    • Your server stays clean, and you can add new functionality just by subscribing to events.
 *    • This is exactly how Node.js internal modules like streams, HTTP server, and process work internally.
 */

const http = require("http");
const EventEmitter = require("events");

// 1️⃣ Create custom EventEmitter
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

// 2️⃣ Subscribe to regular event
myEmitter.on("userVisited", (url, method) => {
  console.log(`User visited: ${url} [${method}]`);
});

// 3️⃣ Subscribe to one-time event (e.g., first user visit)
myEmitter.once("firstVisit", (url) => {
  console.log(`🎉 First visit detected at: ${url}`);
});

// 4️⃣ Subscribe to another event for notifications
myEmitter.on("notifyAdmin", (url) => {
  console.log(`Admin notified: new visit at ${url}`);
});

// 5️⃣ Create HTTP server
const server = http.createServer((req, res) => {
  const { url, method } = req;

  // Emit events
  myEmitter.emit("userVisited", url, method);
  myEmitter.emit("firstVisit", url); // only triggers for first request
  myEmitter.emit("notifyAdmin", url);

  // Send response
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello! Your visit has been recorded.");
});

// 6️⃣ Start server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
