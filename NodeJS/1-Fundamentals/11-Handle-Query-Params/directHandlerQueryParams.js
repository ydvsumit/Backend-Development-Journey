const http = require("http");
const url = require("url"); // to parse URL

const server = http.createServer((req, res) => {
  // Parse the URL
  const parsedUrl = url.parse(req.url, true); // `true` => parses query into an object
  const query = parsedUrl.query;

  console.log("Query Params:", query);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "Query params received",
      query: query,
    })
  );
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
