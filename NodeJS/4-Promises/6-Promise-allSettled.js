/**
 * Promise.allSettled():
 * - Takes an array of promises.
 * - Waits for all promises to finish (whether resolved or rejected).
 * - Returns an array with status + value/reason for each.
 *
 * 📌 Use case: When you want to wait for all tasks and handle success + failure separately
 *              (e.g., multiple API calls where some may fail but you still need results from others).
 *
 * Note: “Difference between all and allSettled?” → all fails fast, allSettled never fails.
 */

const p1 = Promise.resolve("✅ Task 1 done");
const p2 = Promise.reject("❌ Task 2 failed");
const p3 = Promise.resolve("✅ Task 3 done");

Promise.allSettled([p1, p2, p3]).then((results) =>
  console.log("All results:", results)
);
