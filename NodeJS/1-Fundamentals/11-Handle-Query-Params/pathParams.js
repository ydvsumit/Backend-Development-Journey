const http = require("http");

const server = http.createServer((req, res) => {
  // Split the URL into parts
  const urlParts = req.url.split("/"); // ['/users', '123']

  // Check the path
  if (req.method === "GET" && urlParts[1] === "users") {
    const userId = urlParts[2]; // Path parameter

    console.log("User ID:", userId);

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "User fetched", userId }));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
