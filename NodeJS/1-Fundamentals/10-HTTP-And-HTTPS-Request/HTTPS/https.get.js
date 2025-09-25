/**
 * In Node.js, there’s a separate built-in module called https that works the same way as http, but adds TLS/SSL encryption.
 *
 * 🔹 1. https.get()
 *                    - Same as http.get(), but secure (uses GET only).
 *
 * 👉 Here:
 *            • Sends a secure GET request.
 *            • No .end() needed (just like http.get()).
 */
const https = require("https");

https
  .get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
    let data = "";

    res.on("data", (chunk) => {
      data += chunk;
    });

    res.on("end", () => {
      console.log("Response:", data);
    });
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
