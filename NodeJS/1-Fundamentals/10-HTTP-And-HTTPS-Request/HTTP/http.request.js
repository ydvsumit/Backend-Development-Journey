/**
 * 🔹 2. http.request()
 *        • A more flexible method for making HTTP requests.
 *        • You can define method (GET, POST, PUT, DELETE, etc.), headers, and body.
 *        • Must call .end() to actually send the request.
 *
 * To run below code, hit this URL: http://jsonplaceholder.typicode.com:80/posts
 *
 * 👉 Here:
 *          • http.request() lets you make any type of request (POST, PUT, DELETE, etc.).
 *          • You manually specify headers and send body data.
 *
 * ✅ In short:
 *              • Use http.get() when you just want to retrieve something.
 *              • Use http.request() when you need full control (methods, headers, body).
 */

// POST Request:
const http = require("http");

const data = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
});

const options = {
  hostname: "jsonplaceholder.typicode.com",
  port: 80,
  path: "/posts",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = http.request(options, (res) => {
  let body = "";

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    console.log("Response:", body);
  });
});

// Write request body
req.write(data);

// End request (important!)
req.end();
