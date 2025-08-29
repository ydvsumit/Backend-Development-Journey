/**
 * Kernel : The kernel is the core part of an operating system (OS).
 * It manages:
 *            - Hardware resources (CPU, memory, I/O devices)
 *            - Processes (creating, scheduling, killing tasks)
 *            - System calls (APIs the user programs use to talk to the OS)
 * 👉 Think of it as the bridge between hardware and software.
 *
 * How Node.js relates to the Kernel :
 * Node.js runs on top of the OS → which is controlled by the kernel.
 * When Node.js code does things like:
 *                                    - Read/write a file (fs.readFile)
 *                                    - Open a network socket (http.createServer)
 *                                    - Set timers (setTimeout)
 * 👉 Node.js does not directly talk to the hardware. Instead:
 * 1. Node.js uses libuv (a C library bundled with Node.js).
 * 2. libuv makes system calls to the OS kernel (via APIs like epoll on Linux, kqueue on macOS, or IOCP on Windows).
 * 3. The kernel tells Node.js when I/O operations are ready (non-blocking).
 */

const fs = require("fs");

fs.readFile("../content/first.txt", "utf8", (err, data) => {
  console.log("File content:", data);
});

/**
 * 👉 What happens above:
 * 1. JS function fs.readFile is called.
 * 2. Node.js uses libuv to ask the kernel to read the file.
 * 3. The kernel handles the actual disk I/O.
 * 4. When done, the kernel notifies libuv.
 * 5. libuv puts the callback in the event loop queue.
 * 6. Node.js executes your callback with the file contents.
 */
