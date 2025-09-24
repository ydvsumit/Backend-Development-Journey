/**
 * 🔹 What is a Buffer?
 *    • A Buffer is a temporary storage area in Node.js used to handle binary data (0s and 1s).
 *    • It is like an array of raw bytes.
 *    • Buffers are especially useful when you deal with:
 *        ■ Reading/writing files
 *        ■ Network requests (TCP, HTTP)
 *        ■ Streams (audio, video, images)
 *
 * 👉 In simple words:
 *                    If string is for text data, then Buffer is for raw binary data.
 *
 * 🔹 Why Buffers in Node.js?
 *    • JavaScript (by itself) does not handle binary data efficiently—it mainly deals with strings.
 *    • Node.js, being built for networking and file I/O, needs a way to handle binary (e.g., images, video chunks, zipped files).
 *    • So Node.js introduced the Buffer class.
 *
 * ✅ Key Points:
 *                • Buffers store binary data directly.
 *                • Useful for files, images, streams, network packets.
 *                • Can convert between Buffer ↔ String.
 *                • Default buffer size in streams = 64 KB.
 */

// ---------------------------------------------------1. Creating Buffers in Node.js -------------------------------------------------------------
const buf = Buffer.from("Hello");
console.log(buf);
// Output: <Buffer 48 65 6c 6c 6f>  // (Hexadecimal representation of 'Hello')
console.log("Length of buffer:", buf.length); // Output: 5

// Each character in 'Hello' is 1 byte in UTF-8 encoding
// Converting Buffer back to String
console.log("Buffer as string:", buf.toString()); // Output: Hello

// --------------------------------------------------2. Different ways to create Buffers ------------------------------------------------------------

// 1. Allocate Buffer with Size: Creating a Buffer of size 10 bytes (initialized with zeros)
const buffer1 = Buffer.alloc(10); // Allocates a buffer of 10 bytes initialized to 0 OR (10 bytes buffer, filled with 0)
console.log("Buffer of size 10 bytes:", buffer1);
// Output: <Buffer 00 00 00 00 00 00 00 00 00 00>
console.log("Length of buffer1:", buffer1.length); // Output: 10

// 2. Creating a Buffer from an array of bytes
const buffer2 = Buffer.from([65, 66, 67, 68, 69]);
console.log("Buffer from array of bytes:", buffer2);
// Output: <Buffer 41 42 43 44 45>
console.log("Length of buffer2:", buffer2.length); // Output: 5
console.log("Buffer2 as string:", buffer2.toString()); // Output: ABCDE // (65,66,67,68,69 are ASCII codes for A,B,C,D,E)

// 3. Creating a Buffer from a string
const buffer3 = Buffer.from("Hello, Node.js!");
console.log("Buffer from string:", buffer3);
// Output: <Buffer 48 65 6c 6c 6f 2c 20 4e 6f 64 65 2e 6a 73 21>
console.log("Length of buffer3:", buffer3.length); // Output: 15
console.log("Buffer3 as string:", buffer3.toString()); // Output: Hello, Node.js!

// 4. Creating a Buffer from a hexadecimal string
const buffer4 = Buffer.from("48656c6c6f", "hex");
console.log("Buffer from hex string:", buffer4);
// Output: <Buffer 48 65 6c 6c 6f>
console.log("Buffer4 as string:", buffer4.toString()); // Output: Hello
console.log("Length of buffer4:", buffer4.length); // Output: 5

// 5. Creating a Buffer from a base64 string
const buffer5 = Buffer.from("SGVsbG8gd29ybGQ=", "base64");
console.log("Buffer from base64 string:", buffer5);
// Output: <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log("Buffer5 as string:", buffer5.toString()); // Output: Hello world
console.log("Length of buffer5:", buffer5.length); // Output: 11

// 6. Creating a Buffer from a UTF-8 string
const buffer6 = Buffer.from("Hey Dev", "utf8");
console.log("Buffer from UTF-8 string:", buffer6);
// Output: <Buffer e3 81 93 e3 82 93 e3 81 ab e3 81 a1 e3 81 af>
console.log("Buffer6 as string:", buffer6.toString()); // Output: Hey Dev
console.log("Length of buffer6:", buffer6.length); // Output: 7  // (Each character in 'Hey Dev' is 1 byte in UTF-8 encoding)

// 7. Creating a Buffer from a binary string
const buffer7 = Buffer.from("01000001", "binary");
console.log("Buffer from binary string:", buffer7);
// Output: <Buffer 30 31 30 30 30 30 30 31> // (ASCII values of '0' and '1')
console.log("Buffer7 as string:", buffer7.toString()); // Output: 01000001
console.log("Length of buffer7:", buffer7.length); // Output: 8
// Note: 'binary' encoding is not commonly used; it's better to use 'utf8', 'hex', or 'base64'.

// 8. Creating a Buffer from an array of bytes with non-ASCII values
const buffer8 = Buffer.from([0xff, 0xfe, 0xfd, 0xfc]);
console.log("Buffer from non-ASCII byte array:", buffer8);
// Output: <Buffer ff fe fd fc>
console.log("Length of buffer8:", buffer8.length); // Output: 4
console.log("Buffer8 as hex string:", buffer8.toString("hex")); // Output: fffefdfc
// Note: Non-ASCII bytes may not display correctly as strings.
// It's often better to represent them in 'hex' or 'base64' format.

// 9. Creating a Buffer from a string with special characters
const buffer9 = Buffer.from("Café 😊", "utf8");
console.log("Buffer from string with special characters:", buffer9);
// Output: <Buffer 43 61 66 c3 a9 20 f0 9f 98 8a>
console.log("Length of buffer9:", buffer9.length); // Output: 10
console.log("Buffer9 as string:", buffer9.toString()); // Output: Café😊
// Note: Special characters may take multiple bytes in UTF-8 encoding.

// 10. Creating a Buffer from an empty string
const buffer10 = Buffer.from("", "utf8");
console.log("Buffer from empty string:", buffer10);
// Output: <Buffer >
console.log("Length of buffer10:", buffer10.length); // Output: 0
console.log("Buffer10 as string:", buffer10.toString()); // Output: (empty string)
// Note: An empty string results in a Buffer of length 0. It's a valid Buffer but contains no data.

// 11. Creating a Buffer from a large string
const largeString = "A".repeat(1000); // String of 1000 'A's
const buffer11 = Buffer.from(largeString, "utf8");
console.log("Buffer from large string:", buffer11);
// Output: <Buffer 41 41 41 ... > (1000 times)
console.log("Length of buffer11:", buffer11.length); // Output: 1000
console.log(
  "Buffer11 as string (first 50 chars):",
  buffer11.toString().slice(0, 50) + "..."
); // Output: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA...
// Note: Buffers can handle large amounts of data, but be mindful of memory usage in real applications.

// 12. Creating a Buffer from a string with different encoding (latin1)
const buffer12 = Buffer.from("Café", "latin1");
console.log("Buffer from latin1 string:", buffer12);
// Output: <Buffer 43 61 66 e9>
console.log("Length of buffer12:", buffer12.length); // Output: 4
console.log("Buffer12 as string:", buffer12.toString("latin1")); // Output: Café
// Note: 'latin1' encoding maps bytes directly to the first 256 Unicode code points.
// It's useful for binary data that uses single-byte characters.

// 13. Creating a Buffer from a string with different encoding (utf16le)
const buffer13 = Buffer.from("Hello", "utf16le");
console.log("Buffer from utf16le string:", buffer13);
// Output: <Buffer 48 00 65 00 6c 00 6c 00 6f 00>
console.log("Length of buffer13:", buffer13.length); // Output: 10
console.log("Buffer13 as string:", buffer13.toString("utf16le")); // Output: Hello
// Note: 'utf16le' encoding uses 2 bytes for each character, so the Buffer length is double the string length.

// 14. Creating a Buffer from a string with different encoding (ascii)
const buffer14 = Buffer.from("Hello", "ascii");
console.log("Buffer from ascii string:", buffer14);
// Output: <Buffer 48 65 6c 6c 6f>
console.log("Length of buffer14:", buffer14.length); // Output: 5
console.log("Buffer14 as string:", buffer14.toString("ascii")); // Output: Hello
// Note: 'ascii' encoding only supports characters in the range 0-127. Characters outside this range will be truncated.
// It's best for plain English text without special characters.

// 15. Creating a Buffer from a string with different encoding (base64url)
const buffer15 = Buffer.from("SGVsbG8gd29ybGQ", "base64url");
console.log("Buffer from base64url string:", buffer15);
// Output: <Buffer 48 65 6c 6c 6f 20 77 6f 72 6c 64>
console.log("Length of buffer15:", buffer15.length); // Output: 11
console.log("Buffer15 as string:", buffer15.toString()); // Output: Hello world
// Note: 'base64url' is a URL-safe variant of base64 encoding, replacing '+' with '-' and '/' with '_'.
// It's useful for encoding data in URLs without needing additional escaping.

// -----------------------------------------------------------------End of the code --------------------------------------------------------------------------
