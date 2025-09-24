// Writing Data into Buffer
const buf = Buffer.alloc(10);
buf.write("Hi");
console.log(buf); // <Buffer 48 69 00 00 00 00 00 00 00 00>
console.log(buf.toString()); // "Hi"

// Example: Writing a string into a buffer and outputting in various formats
const buffer1 = Buffer.alloc(256); // Allocate a buffer of 256 bytes
const len = buffer1.write("Hello, World!"); // Write a string into the buffer and get the number of bytes written

console.log(`Bytes written: ${len}`); // Output the number of bytes written

console.log(buffer1.toString("utf8", 0, len)); // Output the content of the buffer as a string

console.log(buffer1.toString("hex", 0, len)); // Output the entire buffer content in hexadecimal format

console.log(buffer1.toString("base64", 0, len)); // Output the entire buffer content in Base64 format

console.log(buffer1.toString("binary", 0, len)); // Output the entire buffer content in binary format

console.log(buffer1.toString("ascii", 0, len)); // Output the entire buffer content in ASCII format

console.log(buffer1.toString("utf8", 0, len)); // Output the entire buffer content in UTF-8 format

console.log(buffer1.toString("utf16le", 0, len)); // Output the entire buffer content in UTF-16LE format

console.log(buffer1.toString("latin1", 0, len)); // Output the entire buffer content in Latin-1 format

console.log(buffer1.toString("ucs2", 0, len)); // Output the entire buffer content in UCS-2 format

console.log(buffer1.toString("base64url", 0, len)); // Output the entire buffer content in Base64URL format

console.log(buffer1.toString("hex", 0, len)); // Output the entire buffer content in hexadecimal format
