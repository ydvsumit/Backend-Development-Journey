/**
 * What is Async/Await?
 * - async/await is syntactic sugar over Promises.
 * - It makes asynchronous code look and behave like synchronous code.
 * - async defines a function that always returns a Promise.
 * - await pauses the execution inside an async function until the Promise is settled (fulfilled or rejected).
 */

// Basic Async/Await
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data received"), 2000);
  });
}

async function fetchData() {
  console.log("Fetching...");
  const result = await getData(); // waits here until resolved
  console.log(result); // ✅ Data received
}

fetchData();

// Error Handling with try...catch
function getUser() {
  return new Promise((_, reject) => {
    setTimeout(() => reject("❌ Failed to fetch user"), 2000);
  });
}

async function fetchUser() {
  try {
    const user = await getUser(); // waits here
    console.log(user);
  } catch (error) {
    console.log("Error:", error); // Error: ❌ Failed to fetch user
  }
}

fetchUser();

// Running Promises in Parallel
// ⚡ If you have multiple async tasks, run them in parallel using Promise.all instead of awaiting one by one.

// ❌ Sequential (slow):
async function slow() {
  const a = await getData();
  const b = await getData();
  console.log(a, b);
}

// ✅ Parallel (fast):
async function fast() {
  const [a, b] = await Promise.all([getData(), getData()]);
  console.log(a, b);
}
