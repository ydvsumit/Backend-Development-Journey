/**
 * In Node.js, there’s a separate built-in module called https that works the same way as http, but adds TLS/SSL encryption.
 *
 * 🔹 2. https.request()
 *                        - More flexible — you can use POST, PUT, DELETE, etc. and send a body.
 *
 * 👉 Here:
 *          • We use https.request() for a POST.
 *          • It sends JSON data securely.
 *          • .end() is required to finish the request.
 *
 * ✅ In short:
 *              • http.* → good for local testing. (Usage -> Local servers, testing, insecure APIs & No encryption)
 *              • https.* → always use for real APIs (secure communication). (Usage -> Real APIs, production apps & Encrypted (TLS/SSL))
 */

const https = require("https");

const data = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1,
});

const options = {
  hostname: "jsonplaceholder.typicode.com",
  path: "/posts",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options, (res) => {
  let body = "";

  res.on("data", (chunk) => {
    body += chunk;
  });

  res.on("end", () => {
    console.log("Response:", body);
  });
});

req.on("error", (err) => {
  console.error("Error:", err.message);
});

// Write body
req.write(data);

// Must call end()
req.end();
