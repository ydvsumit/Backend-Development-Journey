/**
 * ✅ Here:
 *          • URLSearchParams converts an object to a query string like name=Sumit&age=25.
 *          • Query params are added to path.
 *          • .end() is required to actually send the request.
 *
 * Output:
 *        Response from server: {"message":"Query received","query":{"name":"Sumit","age":"25"}}
 */
const http = require("http");

// Build query string
const queryParams = new URLSearchParams({
  name: "Sumit",
  age: "25",
}).toString();

const options = {
  hostname: "localhost",
  port: 3000,
  path: `/users?${queryParams}`, // append query params
  method: "GET", // GET request
};

const req = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Response from server:", data);
  });
});

req.on("error", (err) => {
  console.error("Error:", err.message);
});

req.end();
