// 🔹 Basic Syntax
app.use((req, res, next) => {
  console.log("Middleware running...");
  next(); // pass control to next middleware or route
});
// • req → incoming request object
// • res → response object
// • next() → function to pass control to the next step

// 🔹 Example 1: Global Middleware (runs for every request)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
// 📌 Logs every request, then passes control to the next handler.

// 🔹 Example 2: Middleware for a Specific Route
app.use("/admin", (req, res, next) => {
  console.log("Admin area accessed");
  next();
});
// 📌 Runs only when the path starts with /admin.

// 🔹 Example 3: Built-in Middlewares
//    • Express already includes some built-in middlewares:
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded()); // Parse form data
app.use(express.static("public")); // Serve static files

// 🔹 Example 4: Custom Middleware for Authentication
function authMiddleware(req, res, next) {
  if (req.query.token === "123") {
    next(); // valid, move forward
  } else {
    res.status(401).send("Unauthorized");
  }
}

app.get("/dashboard", authMiddleware, (req, res) => {
  res.send("Welcome to Dashboard");
});
// 📌 The middleware checks for a token before letting you access /dashboard.

/**
 * 🔹 5. Third-party Middleware
 *       • These are external packages that you install via npm to handle common tasks (e.g., authentication, logging, cookies).
 *
 * ✅ Common Examples:
 *    Middleware	                  Description
 *    • morgan	          Logs HTTP requests (for debugging).
 *    • cors	            Enables Cross-Origin Resource Sharing.
 *    • cookie-parser	    Parses cookies attached to the client request.
 *    • helmet	          Improves app security by setting HTTP headers.
 */
const morgan = require("morgan");
const cors = require("cors");

app.use(morgan("dev"));
app.use(cors());

/**
 * 🔹 6. Error-handling Middleware
 *       • Used to catch and handle errors in Express
 *       • They are special because they take four parameters: (err, req, res, next).
 */
app.use((err, req, res, next) => {
  console.error("Error:", err.message);
  res.status(500).send("Something went wrong!");
});
// 📌 Express automatically calls this when an error occurs anywhere in your app.

/**
 * ✅ In short:
 *              • Middleware in ExpressJS come in four main types — Built-in, Custom, Third-party, and Error-handling
 *              • They work together to process, secure, and control how requests move through your app before reaching the route.
 */
