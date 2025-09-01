/**
 * OS Module => allows us to interact with our Operating System
 */

const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

//info about current Operating System
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);

// Helps in monitoring system info and writing platform-independent code.
console.log("OS Platform:", os.platform()); // win32, linux, darwin
console.log("CPU Arch:", os.arch()); // x64, arm
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Host Name:", os.hostname());
