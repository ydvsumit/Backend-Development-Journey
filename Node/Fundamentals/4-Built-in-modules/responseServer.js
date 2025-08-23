const http = require("http");

// Make a GET request
http.get("http://jsonplaceholder.typicode.com/posts/1", (res) => {
  let data = "";

  // Listen for data chunks
  res.on("data", (chunk) => {
    data += chunk; // accumulate data
  });

  // When all data received
  res.on("end", () => {
    console.log("Response finished:");
    console.log(data);
  });

  // Handle error
  res.on("error", (err) => {
    console.error("Error:", err.message);
  });
});
