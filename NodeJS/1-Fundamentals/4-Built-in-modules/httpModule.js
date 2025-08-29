/**
 * http Module => allows us to create a server and able to handle request and response
 * http.createServer => helps to create a server with a callback function that accepts 2 params (req & res)
 * req - (request object) => using console we can access request body & headers coming from client or check http method and url
 * res.write(data) => Write data in chunks.
 * res.writeHead(statusCode, header) => Set HTTP status & headers.
 * res.end(data) => End response (must be called once).
 * server.listen(port number) => allows us to listen created server.
 */
const http = require("http");

const server = http.createServer((req, res) => {
  //all request information (giant object) that coming from client request
  // console.log(req);
  console.log(req.method);
  console.log(req.url);

  /**
   * Error [ERR_STREAM_WRITE_AFTER_END]: write after end
   * The above error we can see after when we hit our localhost api to check response.
   * What does it mean:
   *                    we are sending two responses with the same request and that is not allowed.
   * Why do we get error:
   *                    simple because in javascript, if we don't have the return, javascript will keep reading the code.
   * So in our case, let's say user is visiting our homepage, we send back to our homepage.
   * But the problem is that we don't return from the function and then we get error message which try to send again, that is not allowed.
   * We can send only one response per request.
   * To fix this we have 2 options, we can add return in if blocks or setup if /else if / else
   */
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "application/json" });
    // res.write("Hello Node, Welcome to Server");
    res.end("Welcome to Home Page");
    return;
  }
  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end("Here is our short history");
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <p>we can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `);
});

server.listen(5000);
