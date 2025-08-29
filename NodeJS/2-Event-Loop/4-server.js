const http = require("http");

const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

// listen is asynchronous : we are getting request even in our console when server listening or port
server.listen(5000, () => {
  console.log("Server listening on port : 5000....");
});
