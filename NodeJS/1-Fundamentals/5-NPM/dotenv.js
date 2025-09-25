/**
 * 🔹 What is dotenv?
 *    - dotenv is a Node.js library that lets you load environment variables from a .env file into process.env.
 *    - Example .env file:
 *                        PORT=3000
 *                        DB_HOST=localhost
 *                        DB_USER=sumit
 *
 * Without dotenv, you’d have to set env vars manually in the terminal.
 *
 * 🔹 Why require("dotenv").config()?
 *    • When you install dotenv, the module exports an object with a method called .config().
 *    • .config() parses .env and injects values into process.env at runtime.
 *
 * 🔹 Why dotenv is needed
 *    • dotenv is a library that reads the .env file and loads the variables into process.env.
 *    • After calling require('dotenv').config(), Node.js can access the variables.
 *
 * ✅ Summary:
 *              • dotenv exports an object with .config().
 *              • require("dotenv") → loads library.
 *              • .config() → loads .env file into process.env.
 *              • Without .config(), your .env values won’t be available.
 *
 * Let’s clarify why Node.js sometimes can’t access environment variables directly and why dotenv is needed.
 *
 * Environment variables defined in .env file
 *    • A .env file is not automatically loaded by Node.js.
 *    • Node.js doesn’t know about .env files by default.
 *
 * ✅ Summary:
 *              • Node.js can only access actual system environment variables.
 *              • .env files are not automatically read, so without dotenv, Node.js can’t see them.
 *              • dotenv loads .env values into process.env at runtime.
 */

// -------------------------------------------1. require("dotenv")------------------------------------------
// This just imports the library, giving you access to its methods:
const dotenv = require("dotenv");
console.log(dotenv); // { config: [Function: config], parse: [Function: parse] }
// 👉 Notice: The config function is inside it.

// 2. -------------------------------------------.config()-----------------------------------------------------
// This function reads your .env file and pushes variables into process.env.
const env = require("dotenv").config();

console.log(env);
/*
{
  parsed: { PORT: '3000', DB_HOST: 'localhost', DB_USER: 'sumit' }
}
*/
console.log(process.env.PORT); // "3000"
// 👉 Without .config(), the .env file is never loaded, so process.env.PORT would be undefined.
