/**
 * Event-Driven Programming:
 * Event-driven programming is a programming paradigm where the flow of the program is determined by events (like user actions, sensor outputs, messages, or system signals), rather than a strictly sequential flow.
 * In Node.js, event-driven programming is at the core:
 *        - Node.js uses the EventEmitter pattern.
 *        - Instead of constantly checking (“polling”) for something to happen, you register listeners (handlers) for events, and those listeners run asynchronously when the event occurs.
 *        - This is why Node.js is highly scalable and non-blocking.
 *
 * Node.js provides the events module with the EventEmitter class.
 * .on - listen for an event
 * .emit - emit an event
 */

const EventEmitter = require("events");
const emitter = new EventEmitter();

/**
 * .on Listener :
 *              - Registers a listener for the event.
 *              - The listener will run every time the event is emitted.
 */

// Listener 1
emitter.on("order", (item) => {
  console.log(`Order received: ${item}`);
});

// Listener 2
emitter.on("order", (item) => {
  console.log(`Preparing your ${item}...`);
});

// Emit event
emitter.emit("order", "Pizza");

/**
 * .once Listener :
 *                - Registers a one-time listener.
 *                - Listener runs only the first time the event is emitted, then it’s automatically removed.
 */
emitter.once("login", (user) => {
  console.log(`${user} logged in for the first time!`);
});

emitter.emit("login", "Alice"); // Works
emitter.emit("login", "Bob"); // Ignored

// Where Event-Driven Programming is used in Node.js?

// 1. HTTP Server:
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

//server.on('connection') runs whenever a new client connects.
server.on("connection", () => {
  console.log("New connection established!");
});

server.listen(3500);

// 2. File-System (fs)
const fs = require("fs");
const stream = fs.createReadStream("../1-Fundamentals/content/first.txt");

stream.on("data", (chunk) => {
  console.log("Received chunk:", chunk.toString());
});

stream.on("end", () => {
  console.log("File read complete.");
});
