/**
 * Crypto:
 * crypto in Node.js is a built-in module that helps you work with security stuff like:
 *  - Hashing → turning data into a fixed string (like a fingerprint). Example: storing passwords safely.
 *  - Encryption / Decryption → locking and unlocking data so only the right people can read it.
 *  - Random values → generating secure random numbers (like tokens or session IDs).
 *
 * In Short: crypto = your toolbox for security in Node.js.
 *  - Hashing = fingerprint.
 *  - Encryption = lock & key.
 *  - RandomBytes = unique secure IDs.
 */

// Basic
const crypto = require("crypto");

// Make a hash (like password fingerprint)
const hash = crypto.createHash("sha256").update("mypassword").digest("hex");
console.log(hash);

// Make a secure random token
const token = crypto.randomBytes(16).toString("hex");
console.log(token);

// -------------------------------Where crypto is used in real apps:----------------------------------------
/**
 * 1. Signup (store password safely)
 *    - We never save the real password in the database ❌.
 *    - Instead, we save a hash (fingerprint).
 */

// password user enters
const password = "mypassword";

// make a secure hash (sha256 here, bcrypt is usually better)
const hashedPassword = crypto
  .createHash("sha256")
  .update(password)
  .digest("hex");

console.log("Saved in DB:", hashedPassword);

/**
 * 2. Login (verify password):
 *    When user logs in:
 *    - Take entered password
 *    - Hash it again
 *    - Compare with DB
 */

const enteredPassword = "mypassword";
const storedHash = "db_saved_hash_here"; // from signup

const loginHash = crypto
  .createHash("sha256")
  .update(enteredPassword)
  .digest("hex");

if (loginHash === storedHash) {
  console.log("✅ Login success");
} else {
  console.log("❌ Wrong password");
}

/**
 * 3. Session Tokens / API Keys
 * After login, you give the user a random secure token (like a digital key).
 */
const sessionToken = crypto.randomBytes(32).toString("hex");
console.log("Session Token:", sessionToken);
