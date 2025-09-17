/**
 * 3. Handling Query Parameters
 * You can use Node’s built-in url module.
 */
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true → parse query string
  const pathname = parsedUrl.pathname;

  if (req.method === "GET" && pathname === "/greet") {
    const name = parsedUrl.query.name || "Guest";
    res.end(`👋 Hello, ${name}`);
  } else {
    res.end("Try GET /greet?name=Sumit");
  }
});

server.listen(3000, () =>
  console.log("Server running at http://localhost:3000")
);

/**
 * 4. Why Use Frameworks (Express/Fastify)?
 * Manual routing works, but:
 *    - You must handle parsing url, query, body manually.
 *    - You must write extra code for res.json(), res.sendFile(), etc.
 *    - Middleware (logging, auth, CORS) is hard to implement.
 *    - Frameworks like Express/Fastify abstract this and make routing cleaner:
 *      app.get('/about', (req, res) => res.send('About Page'));
 *
 * ✅ Summary
 *      - Routing in Node.js is done by checking req.method + req.url.
 *      - Handle different paths and methods manually.
 *      - For POST requests, listen to data and end events to collect body.
 *      - Use url.parse (or newer URL class) for query params.
 *      - Frameworks (Express/Fastify) are built on top of this manual system.
 */
