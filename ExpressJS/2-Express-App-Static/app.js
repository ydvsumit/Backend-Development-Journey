const express = require("express");
const path = require("path");

const app = express();

/**
 * 🔹 What is express.static?
 *    • express.static() is a built-in middleware in Express.
 *    • It is used to serve static files (like HTML, CSS, JavaScript, images, PDFs, etc.) from a folder on your server.
 *    • Without it, you’d have to manually write routes for every file — which is painful.
 *
 * 🔹 Syntax:
 *            => app.use(express.static(root, [options]))
 *    • root → the folder where your static files live (e.g., "public")
 *    • options → optional configs (like index, extensions, maxAge for caching).
 */

//------------------------------------🔹 Example 1: Serving Static Files----------------------------------------------------------
/**
 * This means Express exposes everything inside (./navbar-app OR ./public) directly at the root (/).
 * 📌 Now:
 *        • http://localhost:5000/logo.svg → serves public/logo.svg
 *        • http://localhost:5000/style.css → serves public/style.css
 *        • http://localhost:5000/app.js → serves public/browser-app.js
 */
app.use(express.static("./public"));

//------------------------------------🔹 Example 2: Serving with Virtual Path-----------------------------------------------------
/**
 * 📌 Now files are available under /static/...
 *      • http://localhost:5000/static/logo.svg
 *      • http://localhost:5000/static/style.css
 *      • http://localhost:5000/static/browser-app.js
 */
// app.use("/static", express.static("./public"));

//------------------------------------🔹 Example 3: With Options----------------------------------------------------------
// app.use(
//   express.static("./public", {
//     index: "home.html", // default file instead of index.html
//     extensions: ["html"], // serve "about.html" when request is "/about"
//     maxAge: "1d", // cache static files for 1 day
//   })
// );

// Also we don't need to write app.get if we put index.html in static files, it will automatically serve all static files
// app.use(express.static("./navbar-app"));

app.get("/", (req, res) => {
  /**
   * instead of using readFileSync like httpModule, ExpressJS provide us sendFile method that is easier to use
   * 🔹 What is res.sendFile()?
   *    • sendFile is a response method in Express used to send a file (HTML, image, PDF, etc.) to the client.
   *    • Unlike res.send() (which sends strings/JSON), res.sendFile() streams the actual file content.
   *    • Internally, it sets proper Content-Type headers (like text/html, image/png, etc.) based on the file.
   *
   * 🔹 Syntax:
   *            - res.sendFile(path [, options] [, callback])
   *      • path → absolute path of the file to send
   *      • options → optional (root, headers, maxAge, etc.)
   *      • callback → function called if sending fails (like file not found).
   *
   * 🔹 res.sendFile VS express.static:
   * ✅ In short:
   *              • Use res.sendFile when you want to send a specific file to client.
   *              • Use express.static when you want to expose a whole folder of files. OR A middleware that serves an entire folder of files automatically.
   */
  res.sendFile(path.resolve(__dirname, "./navbar-app/index.html"));
});

// 👉 So the error is not your fault — it’s Express v5 stricter routing rules.
// Just switch "*" → "/*" or /./* and it’ll work.
app.all(/.*/, (req, res) => {
  res.status(404).send("Resource Not Found");
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});

/**
 * 🔹 Why express.static and not app.static?
 *    ■ express.static is middleware, not a method on the app instance
 *      - In Express, there are two main categories of things:
 *          • App methods → app.get(), app.post(), app.use(), etc. (they define routes and behaviors).
 *          • Middleware functions → things that process requests (like logging, parsing, or serving static files).
 * 👉 express.static() is just a built-in middleware factory function, not tied to one specific app object.
 */

/**
 * BONUS:
 * we have 2 options to serve static files:
 *  1. Adding index.html to static assets that means we don't need to write app.get() specifically
 *  2. SSR (Server Side Rendering) - Template Engine
 */
