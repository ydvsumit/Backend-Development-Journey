/**
 * Event :
 * - Events in Node.js are signals that something has happened in the system (either in your code, OS, or Node itself).
 * - Node.js is built on an event-driven architecture, which means instead of constantly checking if something happened (polling), Node waits for events and executes associated listeners (callbacks).
 *
 * The Core of Events in Node.js :
 * 1. Node.js has a core module called events.
 * 2. Inside it, there is a class called EventEmitter.
 * 3. We use EventEmitter to:
 *                          - Emit events (like "something happened").
 *                          - Listen for events (attach .on() or .once() callbacks).
 *
 * In Summary :
 *            - Events in Node.js are notifications/signals.
 *            - EventEmitter is the core class to handle them.
 *            - .on() attaches listeners, .emit() triggers events.
 *            - Many core Node modules (like http, fs, net, stream) are built on this event-driven mechanism.
 *
 * Important Note :
 * 1. When we want to create something Custom then we need to extend the class.
 * 2. And if we simply wanted to emit an event as well as listen for it, then you can just create an instance from EventEmiiter.
 * 3. Order matters in between listening event and emit an event. If we trigger emit event before listening it then it will ignore to listen the event
 */

const EventEmitter = require("events"); // return a class

// Create an EventEmiiter instance
const myEmmitter = new EventEmitter(); //custome Event

// Register an event listener
myEmmitter.on("greet", (name) => {
  console.log(`Hello ${name}`);
});

// Emit the event
myEmmitter.emit("greet", "Sumit");

/**
 * Explanation of above code:
 * myEmitter.on('greet', callback) → registers a listener for "greet" event. / (eventName, listener)
 * myEmitter.emit('greet', 'Sumit') → triggers the event/eventName, so the callback runs with "Sumit".
 *
 * Note: above .on listener, it takes params in callback fn and the values of params are provided by our .emit after the event placeholder
 */

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Multiple Listeners : Both listeners will run in the order they were registered.
myEmmitter.on("data", (msg) => {
  console.log(`Listener 1 received : ${msg}`);
});

myEmmitter.on("data", (msg) => {
  console.log(`Listener 2 received : ${msg}`);
});

myEmmitter.emit("data", "Event-driven programming is awesome!");

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
/**
 * We did not use .emit() manually (who has already an EventEmitter under the hood), because:
 * 1. fs.createReadStream() returns a Readable Stream, which is already an EventEmitter under the hood.
 * 2. The stream internally emits events ('data', 'end', 'error', etc.) when it reads the file in chunks.
 * 3. You are only listening (subscribing) to those events with .on() →
 *        - You don’t need to call .emit() yourself, because Node.js streams automatically trigger those events while doing their job.
 *
 * In short:
 * - Built-in modules (like fs, http, net) emit their own events automatically.
 * - You only call .emit() when building your own custom event system.
 */
// File-System (Event-driven)
const fs = require("fs");

const stream = fs.createReadStream("../1-Fundamentals/content/first.txt");

stream.on("data", (chunk) => {
  console.log(`Received chunk: ${chunk}`);
});

stream.on("end", () => {
  console.log("Finished reading file.");
});
