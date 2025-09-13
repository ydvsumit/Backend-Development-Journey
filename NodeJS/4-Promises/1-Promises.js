/**
 * A Promise in Node.js is an object that represents the eventual result of an asynchronous operation.
 *
 * Promise States:
 * - A Promise can be in one of 3 states:
 *      1. Pending → still running, result not ready yet
 *      2. Fulfilled → operation finished successfully (resolved)
 *      3. Rejected → operation failed (error occurred)
 *
 * Explanation in details:
 * -> new Promise((resolve, reject) => {}) → creates a promise.
 * -> resolve() → called if success.
 * -> reject() → called if error.
 * -> .then() → handles resolved value.
 * -> .catch() → handles rejected value.
 * -> .finally() → always runs (cleanup).
 */
const myPromise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("✅ Task completed!");
  } else {
    reject("❌ Task failed!");
  }
});

myPromise
  .then((result) => {
    console.log(result); // runs if resolved
  })
  .catch((error) => {
    console.log(error); // runs if rejected
  })
  .finally(() => {
    console.log("Promise finished (success or fail).");
  });
