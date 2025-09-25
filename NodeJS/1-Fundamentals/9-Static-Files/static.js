/**
 * 🔹 What are Static Files?
 *    - Static files are files that don’t change when a user requests them.
 *    Examples:
 *              • HTML pages
 *              • CSS files
 *              • JavaScript files (frontend)
 *              • Images, fonts, PDFs
 *    Basically, the same file is sent to every client who requests it.
 *
 * 🔹 Why do we need to serve static files?
 *    - When you build a web app, the frontend (UI) often needs images, CSS stylesheets, and scripts.
 *    - Your Node.js server must provide (serve) these files when the browser asks for them.
 *  Example:
 *          • Browser requests http://localhost:3000/style.css
 *          • Node.js should send style.css back.
 */

// Serving Static Files Manually (without frameworks)
// You can use the built-in fs (File System) + http module to serve files:
// The server reads the requested file and sends it back.

const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  // Build file path
  let filePath = path.join(
    __dirname,
    "public",
    req.url === "/" ? "index.html" : req.url
  );
  console.log("filePath = ", filePath);

  // Get extension
  let ext = path.extname(filePath);
  let contentType = "text/html";

  // Set correct Content-Type
  if (ext === ".css") contentType = "text/css";
  if (ext === ".js") contentType = "text/javascript";
  if (ext === ".png") contentType = "image/png";

  // Read file and send response
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>404 - File Not Found</h1>");
    } else {
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

/**
 * 🔹 Summary
 *    • Static files = files that don’t change per request (HTML, CSS, JS, images).
 *    • In pure Node.js, we manually read and serve them using fs.
 *    • In Express, we use express.static() middleware.
 *    • It’s a core part of building any web app because frontend assets must be served this way.
 */
