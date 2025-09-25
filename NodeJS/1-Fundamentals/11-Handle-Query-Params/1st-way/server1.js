// 1st run server then run client
// server1 Output -> Query Params received: { name: 'Sumit', age: '23' }

const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // true → parse query to object
  const query = parsedUrl.query;

  console.log("Query Params received:", query);

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Query received", query }));
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
