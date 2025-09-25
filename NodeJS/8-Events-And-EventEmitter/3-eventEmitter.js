/**
 * 🔹 What is EventEmitter?
 *    • In Node.js, EventEmitter is a core class from the events module.
 *    • It allows objects to emit events and listen for those events.
 *    • Node.js uses it heavily internally (e.g., streams, HTTP servers, timers).
 *
 * Think of it as “subscribe & publish” for events.
 *
 * 🔹 Key Concepts:
 *                  • emit(eventName, [...args]) – Triggers an event.
 *                  • on(eventName, callback) – Listens for an event.
 *                  • once(eventName, callback) – Listens for an event only once.
 *                  • removeListener(eventName, callback) – Stop listening to an event.
 *
 *
 * 🔹 Real-world Uses in Node.js:
 *                                • Streams: data, end, error events
 *                                • HTTP server: request, connection, close events
 *                                • Timers: setTimeout and setInterval internally use EventEmitter
 *                                • Custom modules: Any module can emit events to notify other parts of your app
 *
 * 🔹 Summary:
 *            • EventEmitter allows asynchronous communication in Node.js.
 *            • You can emit events and subscribe to them.
 *            • It’s the backbone of Node.js’s event-driven architecture.
 */
const EventEmitter = require("events");

// Create an instance
const myEmitter = new EventEmitter();

// Subscribe/Listen to an event
myEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit("greet", "Sumit"); // Output: Hello, Sumit!

// Using 'once'
myEmitter.once("welcome", (name) => {
  console.log(`Welcome, ${name}!`);
});

myEmitter.emit("welcome", "John"); // Output: Welcome, John!
myEmitter.emit("welcome", "Alice"); // No output, because 'once' listens only once
