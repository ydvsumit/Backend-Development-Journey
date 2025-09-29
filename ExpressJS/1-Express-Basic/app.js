/**
 * What is ExpressJS ?
 * ExpressJS is a web application framework for Node.js. It is one of the most popular frameworks used to build web applications and RESTful APIs because
 * it makes working with the raw http module of Node.js much simpler.
 *
 * Key Points about ExpressJS:
 *    1. Built on Node.js HTTP module → It provides a higher-level abstraction over the Node.js core http server.
 *    2. Minimal & flexible → It’s lightweight but highly extensible through middleware and third-party packages.
 *    3. Routing → Makes it easy to define URL paths (/login, /users/:id) and HTTP methods (GET, POST, etc.).
 *    4. Middleware → Functions that process requests before sending a response (used for authentication, logging, parsing JSON, etc.).
 *    5. Template Engines → Supports engines like EJS, Pug, or Handlebars to render dynamic HTML.
 *    6. REST APIs → Most widely used for creating APIs that can handle CRUD operations with JSON.
 *    7. Community Support → Huge ecosystem of middleware, plugins, and strong documentation.
 *
 * The methods that we are using most is giving below:
 *      1. app.get
 *      2. app.post
 *      3. app.put
 *      4. app.delete
 *      5. app.all        -> app.all() is a routing method used to handle all types of HTTP requests (GET, POST, PUT, DELETE, etc.) for a specific route or path.
 *      6. app.use        -> Responsible for middleware
 *      7. app.listen
 *
 * 🔹 What is app.use?
 *    - In ExpressJS, app.use() is a method to register middleware functions.
 *      • Middleware = functions that run before your route handlers (like /users, /login).
 *      • They can modify the request (req) and response (res) objects, or decide whether to pass control to the next function.
 *      • app.use is usually applied at the application level (works for all routes unless restricted to a specific path).
 *
 * 🔹 Syntax
 *    - app.use([path], callback)
 *      • path → optional. If not given, it runs on all routes
 *      • callback → the middleware function (req, res, next)
 *      • next() → tells Express to move to the next middleware/route handler.
 *
 * ✅ In short:
 *             - app.use is used to add middleware that runs before route handlers. It helps with logging, authentication, parsing, serving static files, error handling, etc.
 */
const express = require("express"); // Here, we're getting a function back from express

const app = express(); // Here, we just invoke it and we right away have our server instance with bunch of cool methods

// instead of above, you can see below somewhere also that is same
// const app = require("express")();

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.listen(5000, () => {
  console.log(`Server is listening on Port: 5000`);
});
