/**
 * What is a Route?
 * A route is simply a path + method combination (like /home with GET, or /users with POST).
 * Example:
 *          - GET / → show homepage
 *          - GET /about → show about page
 *          - POST /login → handle login form
 */

/**
 * 1. Using the Built-in http Module
 * Node.js has a built-in http module to create a server.
 * You can check req.url (path) and req.method (HTTP method) to decide how to respond.
 */
//Basic Manual Routing
const http = require("http");

const server = http.createServer((req, res) => {
  // Set header so browser knows we are sending text
  res.setHeader("Content-Type", "text/plain");

  if (req.method === "GET" && req.url === "/") {
    res.end("🏠 Welcome to Home Page");
  } else if (req.method === "GET" && req.url === "/about") {
    res.end("ℹ️ About Us Page");
  } else if (req.method === "POST" && req.url === "/login") {
    res.end("🔑 Login successful (dummy)");
  } else {
    res.statusCode = 404;
    res.end("❌ Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
