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
 *
 * What is Hashing in Node.js?
 * • Hashing is a one-way cryptographic process that transforms input data (like a password, file, or text) into a fixed-length string of random-looking characters using a special math function.
 * • In Node.js, we usually do this with the built-in crypto module.
 *
 * ⚡ Key Points about Hashing:
 *          • One-way process → You can’t “reverse” a hash to get the original data back.
 *          • Fixed size output → No matter how big the input is, the hash size stays the same (e.g., SHA-256 gives 64 characters).
 *          • Used for security → Commonly used to store passwords safely (we store the hash, not the real password).
 *          • Fast comparison → Instead of comparing big text/files, we compare their hashes.
 *
 * Encryption in Node.js:
 *                      - Encryption = locking your data with a secret key so only someone with the right key can unlock it.
 * It’s a two-way process:
 *                        - You encrypt (lock) the data before sending/storing.
 *                        - The receiver decrypts (unlocks) it using the correct key.
 *
 * ⚡ Key Differences from Hashing:
 *                                  - Hashing: one-way (you can’t get the original back).
 *                                  - Encryption: two-way (you can encrypt → decrypt back to original).
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

/**
 * 4. Encryption & Decryption
 */

// Secret key & algorithm
const algorithm = "aes-256-cbc";
const key = crypto.randomBytes(32); // Must be 32 bytes for aes-256
const iv = crypto.randomBytes(16); // Initialization vector

// Data to encrypt
const message = "Hello, this is secret!";

// Encrypt
const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update(message, "utf-8", "hex");
encrypted += cipher.final("hex");
console.log("Encrypted:", encrypted);

// Decrypt
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log("Decrypted:", decrypted);
