/**
 * Crypto: Provides cryptographic functions like hashing, encryption, decryption.
 * - Used in authentication (password hashing, JWT, OAuth, etc.).
 * 
 * What happens below:
 * 1. crypto.createHash('sha256'):
 *    - Builds a Hash object configured to use the SHA-256 algorithm (a fast, one-way hash).
 *    - You can see supported algorithms with crypto.getHashes().
 * 
 * 2. .update('mypassword'):
 *    - Feeds data into the hash.
 *    - You can call update() multiple times (streaming) with chunks: .update(part1).update(part2)….
 *    - When you pass a string, it defaults to UTF-8. You can pass a Buffer too.
 * 
 * 3.digest('hex'):
 *    - Finalizes the hash and returns the result.
 *    - Passing 'hex' gives a lowercase hex string; omit the arg to get a Buffer, or use 'base64' if you prefer compact text.
 *    - After digest() the Hash object is done; you can’t .update() it again.

So hash becomes a 64-character hex string (32 bytes = 256 bits).
Important: plain SHA-256 of a password is not suitable for storing passwords (see below).

 */
const crypto = require("crypto");

// Create a hash
const hash = crypto.createHash("sha256").update("mypassword").digest("hex");
console.log("Hash:", hash);

/**
 * What happens below:
 * 1. crypto.randomBytes(16):
 *    - Returns 16 cryptographically secure random bytes (128 bits) from the OS (CSPRNG).
 *    - This is very different from Math.random()—which is not secure.
 *    - Use the async form crypto.randomBytes(size, cb) if you’re generating lots of randomness on a busy server to avoid blocking the event loop.
 *
 * 2. .toString('hex'):
 *    - Encodes the raw bytes as hex text.
 *    - 16 bytes → 32 hex characters.
 *    - Common uses: salts, IVs/nonces, API keys, one-time tokens.
 */
// Generate random bytes
const randomBytes = crypto.randomBytes(16).toString("hex");
console.log("Random:", randomBytes);
