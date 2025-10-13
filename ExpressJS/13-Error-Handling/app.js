/**
 * 🔹 What is Error Handling in ExpressJS?
 *    - Error handling in ExpressJS means catching and managing errors that happen in your app — like wrong input, server issues, or failed database connections — without crashing the server.
 *
 * In short —
 *            👉 It helps your app respond properly when something goes wrong.
 *
 * 🔹 Why do we need error handling?
 * Without error handling 👇
 * • If something goes wrong in your code (like undefined variable or DB error),
 * • your server might crash or send a confusing message.
 *
 * With proper error handling 👇
 * • You can send a clear, user-friendly response like:
 * • { "error": "Something went wrong! Please try again later." }
 *
 * ✅ In short:
 *    • Error handling in ExpressJS means catching errors (using try-catch, throw, or next(err)) and handling them using a special middleware with four parameters (err, req, res, next)
 *    • It helps your app handle problems gracefully without crashing.
 *
 * 🔹 How to Handle Errors in Express
 *    - There are mainly two ways:
 */

const express = require("express");

const app = express();

// ✅ 1. Using try-catch inside routes
// You use try...catch to safely handle code that may fail.
app.get("/user", (req, res) => {
  try {
    // some code that might throw an error
    let data = undefinedVariable; // ❌ will throw error
    res.send(data);
  } catch (error) {
    res.status(500).send("Something went wrong!");
  }
});
// 📌 If an error happens, Express will not crash, and the client will get the message.

/**
 * ✅ 2. Using a Global Error-handling Middleware
 *       • Express provides a special middleware for handling all errors in one place.
 *    🔴 It must have four parameters:
 *    (err, req, res, next)
 */

// Normal route
app.get("/", (req, res) => {
  throw new Error("Oops! Something broke."); // throw error
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack); // log the error
  res.status(500).json({ message: "Internal Server Error!" });
});

// 📌 Here:
// If any route throws an error, Express automatically passes it to this middleware.
// You send a custom response instead of letting the server crash.

// ✅ 3. Manually Passing Errors with next()
// You can send an error to the handler using next(err).
app.get("/test", (req, res, next) => {
  const error = new Error("Something failed!");
  next(error); // pass to error-handling middleware
});

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(5000, () => console.log("Server running on port: 5000"));
