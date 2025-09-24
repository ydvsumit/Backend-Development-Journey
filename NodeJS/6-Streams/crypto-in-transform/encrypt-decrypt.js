// crypto also provides Transform streams for encryption/decryption.
const fs = require("fs");
const crypto = require("crypto");

// Encrypt
// Secret key
const password = "mysecretpassword";
const key = crypto.scryptSync(password, "salt", 24); // derive key
const iv = Buffer.alloc(16, 0); // initialization vector

// Encrypt
const cipher = crypto.createCipheriv("aes-192-cbc", key, iv);

const input = fs.createReadStream("../simpleFile.txt");
const encrypted = fs.createWriteStream("./example.enc");

input.pipe(cipher).pipe(encrypted);

encrypted.on("finish", () => {
  console.log("File encrypted successfully!");

  // ✅ Only decrypt AFTER encryption is done
  const decipher = crypto.createDecipheriv("aes-192-cbc", key, iv);
  const encryptedInput = fs.createReadStream("./example.enc");
  const decrypted = fs.createWriteStream("./example-decrypted.txt");

  encryptedInput.pipe(decipher).pipe(decrypted);

  decrypted.on("finish", () => {
    console.log("File decrypted successfully!");
  });
});
