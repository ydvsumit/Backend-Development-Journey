const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
    return;
  }
  // This will block whole server not specifically about because the process is going on whole server
  // To check you can see by open two tabs with both endpoint and see it's showing loading when you hit about and after that home
  if (req.url === "/about") {
    // BLOCKING CODE !!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} & ${j}`);
      }
    }
    res.end("About Page");
    return;
  }
  res.end("Error Page");
});

server.listen(5000, () => {
  console.log("Server Listening on Port : 5000....");
});
