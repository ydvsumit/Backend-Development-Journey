/**
 * Event Loop : The Event Loop is the mechanism in Node.js that allows non-blocking, asynchronous execution on a single thread.
 *              The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that a single JavaScript thread is used by default — by offloading operations to the system kernel whenever possible.
 *
 * How kernels handles operation:
 * Since most modern kernels are multi-threaded, they can handle multiple operations executing in the background.
 * When one of these operations completes, the kernel tells Node.js so that the appropriate callback may be added to the poll queue to eventually be executed.
 *
 * How it works (step by step):
 * 1. Node.js starts your program (main code runs first, synchronously).
 * 2. Async tasks (like setTimeout, fs.readFile, http request) are registered and passed to system APIs.
 * 3. When those tasks finish, their callbacks are queued for execution.
 * 4. The Event Loop picks tasks from these queues and executes them in phases.
 *
 * Phases of the Event Loop:
 * # The Event Loop runs in phases, in a loop (Order):
 *   1. Timers Phase → executes callbacks from setTimeout and setInterval.
 *   2. Pending Callbacks Phase → executes I/O callbacks that were deferred.
 *   3. Idle/Prepare Phase (internal use).
 *   4. Poll Phase → retrieves new I/O events; executes I/O callbacks (e.g., fs.readFile).
 *   5. Check Phase → executes setImmediate() callbacks.
 *   6. Close Callbacks Phase → handles things like socket.on('close', ...).
 * In between phases, Node.js also processes microtasks (process.nextTick, Promises) and Microtasks (nextTick, Promises) run between phases, before the event loop moves on.
 */

console.log("Start");

setTimeout(() => {
  console.log("setTimeout callback");
}, 0);

setImmediate(() => {
  console.log("setImmediate callback");
});

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

/**
 * Tick: Every time the runtime calls back into JavaScript for an event, we call it a Tick.
 * process.nextTick():
 * - Node.js built-in function.
 * - Adds a callback to the next tick queue (microtask queue).
 * - Runs immediately after the current operation completes, before the Event Loop continues to the next phase.
 * - Highest priority in Node.js async tasks.
 */

process.nextTick(() => {
  console.log("process.nextTick callback");
});

console.log("End");

// process.nextTick & Promise (microtasks) run before moving to the next phase.
// setTimeout (Timers phase) runs before setImmediate (Check phase).
