/**
 * 1. Error Handling in Callbacks
 * In the old callback pattern, the first argument is usually the error (err-first callback).
 * Rule: Always check err before using result.
 */
function getData(callback) {
  setTimeout(() => {
    callback(new Error("❌ Something went wrong"), null);
  }, 1000);
}

getData((err, result) => {
  if (err) {
    console.error("Error:", err.message);
  } else {
    console.log("Result:", result);
  }
});

/**
 * 2. Error Handling in Promises
 * If a Promise rejects, you catch it with .catch().
 * You can also chain .catch() at the end to catch all errors.
 * 👉 If you forget .catch(), the error becomes an UnhandledPromiseRejection.
 */
function getDataInPromises() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("❌ Promise failed"), 1000);
  });
}

getDataInPromises()
  .then((res) => console.log(res))
  .catch((err) => console.error("Caught:", err));

/**
 * 3. Error Handling in Async/Await
 * Use try...catch inside an async function.
 */
function getAsyncAwaitData() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("❌ Async/Await failed"), 1000);
  });
}

async function fetchData() {
  try {
    const data = await getAsyncAwaitData(); // throws if rejected
    console.log("Data:", data);
  } catch (err) {
    console.error("Caught error:", err);
  }
}

fetchData();

/**
 * 4. Handling Multiple Async Errors
 * If you’re running multiple async tasks:
 * ✅ Use Promise.allSettled() to get all results, even errors.
 */
const p1 = Promise.resolve("✅ Done 1");
const p2 = Promise.reject("❌ Failed 2");
const p3 = Promise.resolve("✅ Done 3");

Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));

// Output
// [
//   { status: 'fulfilled', value: '✅ Done 1' },
//   { status: 'rejected', reason: '❌ Failed 2' },
//   { status: 'fulfilled', value: '✅ Done 3' }
// ]

/**
 * 5. Global Error Handling
 * In real Node.js apps, always add global handlers:
 * 👉 These catch errors not handled anywhere else (last line of defense).
 */
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
});

/**
 * ✅ Summary
 * 1. Callbacks → check err argument.
 * 2. Promises → .catch() handles rejections.
 * 3. Async/Await → wrap in try...catch.
 * 4. Multiple tasks → use Promise.allSettled() if you want to collect errors + results.
 * 5. Global safety net → process.on("uncaughtException") + process.on("unhandledRejection").
 */
