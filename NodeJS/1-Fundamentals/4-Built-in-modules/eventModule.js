/**
 * Provides the EventEmitter class to handle events.
 * More about event in 4-Events Section
 */
const EventEmitter = require("events");
const customEmitter = new EventEmitter();

customEmitter.on("greet", (name) => {
  console.log(`Hello, ${name}!`);
});

customEmitter.emit("greet", "Sumit"); // Hello, Sumit!
