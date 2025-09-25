/**
 * 🔹 1. http.get():
 *        • A shortcut method for making HTTP GET requests.
 *        • You don’t need to specify the method explicitly, because it always uses GET.
 *        • Simpler to use if you only need to fetch data (like calling an API or loading a webpage).
 *
 *
 * 👉 Here:
 *          • http.get() sends a request to the URL.
 *          • Default method = GET.
 *          • Useful for fetching data from an API or website.
 *
 */
const http = require("http");

http
  .get("http://jsonplaceholder.typicode.com/posts/1", (res) => {
    let data = "";

    // Receive chunks of data
    res.on("data", (chunk) => {
      data += chunk;
    });

    // All data received
    res.on("end", () => {
      console.log("Response:", data);
    });
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
