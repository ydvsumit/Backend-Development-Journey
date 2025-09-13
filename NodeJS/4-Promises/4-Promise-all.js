/**
 * Promise.all():
 * - Takes an array of promises.
 * - Runs them in parallel.
 * - Resolves only if all promises succeed.
 * - Rejects immediately if any one fails.
 *
 * 📌 Use case: When you need all results together (e.g., load multiple APIs before rendering UI).
 *
 * Note: “Difference between all and allSettled?” → all fails fast, allSettled never fails.
 */

const p1 = Promise.resolve("✅ Task 1 done");
const p2 = Promise.resolve("✅ Task 2 done");
const p3 = Promise.reject("❌ Task 3 failed");

Promise.all([p1, p2])
  .then((results) => console.log("All resolved:", results))
  .catch((err) => console.log("One failed:", err));

Promise.all([p1, p2, p3])
  .then((results) => console.log("All resolved:", results))
  .catch((err) => console.log("One failed:", err));
