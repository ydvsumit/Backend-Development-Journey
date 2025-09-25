const http = require("http");
const querystring = require("querystring");

const queryParams = {
  name: "John Doe",
  age: 30,
  city: "New York",
};

const queryString = querystring.stringify(queryParams); // name=John%20Doe&age=30&city=New%20York

const options = {
  hostname: "localhost",
  port: 3000,
  path: `/api/users?${queryString}`, // append query string
  method: "GET",
};

const req = http.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log("Response:", data);
  });
});

req.on("error", (e) => {
  console.error(`Problem with request: ${e.message}`);
});

req.end();
