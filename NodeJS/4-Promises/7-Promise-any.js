/**
 * Promise.any(): (newer ES2021 feature)
 * - Takes an array of promises.
 * - Resolves as soon as the first promise fulfills (ignores rejections).
 * - If all promises reject, it rejects with an AggregateError.
 *
 * 📌 Use case: Return first successful result, ignore failures
 *
 * 📌 Key difference between race and any:
 *    - race: resolves/rejects with first to settle (success OR failure)
 *    - any: resolves with first success, ignores failures (only rejects if all fail)
 *
 * ❓ Question in Interviews:
 *                     “If you want the first successful API response, even if others fail — which method?”
 * ✅ Answer: Promise.any()
 */

const p1 = Promise.reject("❌ Task 1 failed");
const p2 = new Promise((resolve) =>
  setTimeout(() => resolve("✅ Task 2 done"), 300)
);
const p3 = new Promise((resolve) =>
  setTimeout(() => resolve("✅ Task 3 done"), 500)
);

Promise.any([p1, p2, p3])
  .then((result) => console.log("First success:", result))
  .catch((err) => console.log("All failed:", err));

// if we try:
Promise.any([Promise.reject("Fail 1"), Promise.reject("Fail 2")])
  .then((result) => console.log(result))
  .catch((err) => console.error("All failed:", err));
