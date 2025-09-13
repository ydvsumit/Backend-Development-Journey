/**
 * Promise.race():
 * - Takes an array of promises.
 * - Resolves or rejects as soon as the first promise settles (whichever is faster).
 *
 * 📌 Use case: Timeout handling → return whichever responds first.
 *
 * Note: “When to use race?” → timeouts or fastest response.
 */

const fast = new Promise((resolve) =>
  setTimeout(() => resolve("⚡ Fast one"), 100)
);
const slow = new Promise((resolve) =>
  setTimeout(() => resolve("🐢 Slow one"), 500)
);
const fail = new Promise((_, reject) =>
  setTimeout(() => reject("❌ Failed"), 200)
);

Promise.race([fast, slow, fail])
  .then((result) => console.log("Winner:", result))
  .catch((err) => console.log("First failed:", err));
