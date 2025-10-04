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
 *
 * 🔹 More about HTTP Methods, please visit first 0-HTTP-METHODS file in NodeJS Section
 */
const express = require("express"); // Here, we're getting a function back from express

const app = express(); // Here, we just invoke it and we right away have our server instance with bunch of cool methods

// instead of above, you can see below somewhere also that is same
// const app = require("express")();

app.get("/", (req, res) => {
  res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

/**
 * • I want to handle 404 as well, so if the user comes to my server and tries to access a resource that doesn't exist, what I'm gonna send back.
 * • as we know, by default browser will return 404 with GET if url is invalid, then I can setup my own 404 response
 *-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 🔹 What is app.all()?
 *    • app.all() is used to handle all HTTP methods (GET, POST, PUT, PATCH, DELETE, etc.) for a given path.
 *    • Think of it as a catch-all handler for a route.
 *    • It’s useful when you want the same logic to run regardless of the HTTP method.
 *
 * 🔹 Syntax:   app.all(path, callback)
 *    • path → the route (like /users, *, etc.)
 *    • callback → middleware/handler function (req, res, next)
 *
 * 🔹 Difference from app.use()
 *    • app.use() → applies to all routes/methods (optionally restricted by path).
 *    • app.all() → applies to a specific route, but all HTTP methods.
 *
 * ✅ In short:
 *              • app.all() is used when you want to catch all HTTP methods for a particular route. Often used for logging, authentication checks, or error handlers on a route level.
 *------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * What is next in Express?
 * • In ExpressJS, every middleware or route handler function has this signature: (req, res, next) => { ... }
 * Here:
 *      • req → the request object
 *      • res → the response object
 *      • next → a function that, when called, passes control to the next middleware or route handler in the stack
 *
 * 🔹 Why do we need next()?
 *    • Express executes middleware/handlers in order
 *    • If you don’t call next(), the request will get “stuck” and never move forward.
 * -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 * 🔹 Meaning of * in app.all('*', ...) : the * in Express routes is called a wildcard (or "catch-all").
 *    • * matches any path.
 *    • Combined with app.all(), it means:
 *                                        👉 Handle all HTTP methods, for any route.
 *    So, it’s like a global fallback when no other route matches.
 *
 * 🔹 Difference: * vs Middleware
 *    • app.use((req,res)=>{}) → also handles all paths & methods (acts like global middleware).
 *    • app.all('*', ...) → explicitly says: “If no other route matched, this is the final handler for all methods.
 *                          (commonly used for 404 pages).
 *
 * ✅ In short:
 *              - in app.all('*', ...) = catch everything that wasn’t handled earlier.
 *              - It’s Express’s way to create a default/fallback route.
 */

/**
 * ■ PathError [TypeError]: Missing parameter name at index 1: *
 *    - That comes from path-to-regexp, which Express uses internally to parse route paths.
 *    - This error means Express is choking on your app.all("*", ...).
 *
 * 🔹 Why it happens ?
 *        - In Express v5 (beta), the router became stricter about paths, and a bare "*" is no longer valid.
 *    • In Express v4:
 *        - app.all("*", handler)   // ✅ works
 *    • In Express v5:
 *        - app.all("*", handler)   // ❌ throws PathError
 *    Because "*" is now treated as an invalid path pattern.
 *
 * ✅ Fix:
 *        - Use a regex or /* or given below pattern instead of "*".
 */
// all method: I am going to use all method because user can do multiple things on a server and I wanna cover them all, not just getting the resource or inserting the resource or whatever, I wanna cover them all.
app.all(/.*/, (req, res) => {
  res.status(404).send("<h1>Resource Not Found</h1>");
});

app.listen(5000, () => {
  console.log(`Server is listening on Port: 5000`);
});
