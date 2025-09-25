// 🔹 Alternative: Modern way (URL + URLSearchParams)
// Instead of url.parse, you can use the newer URL class:
const http = require("http");

const server = http.createServer((req, res) => {
  const myUrl = new URL(req.url, `http://${req.headers.host}`);
  const params = myUrl.searchParams;

  const name = params.get("name");
  const age = params.get("age");

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ name, age }));
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
