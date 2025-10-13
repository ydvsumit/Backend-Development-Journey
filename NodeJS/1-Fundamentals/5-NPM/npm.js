/**
 * 🔹 What are npm scripts?
 *    • npm scripts are custom commands that you define inside your package.json file.
 *    • They help you automate tasks — like starting your app, running a server, testing, or building code — with simple commands instead of long ones.
 *
 * 📘 Example package.json:
 *                            {
 *                               "name": "myapp",
 *                               "version": "1.0.0",
 *                               "scripts": {
 *                                    "start": "node index.js",
 *                                    "dev": "nodemon index.js",
 *                                    "test": "echo 'Running tests...'"
 *                                }
 *                             }
 *
 * 🔹 How to run these scripts
 *    Command	                      What it does
 *    npm start	          Runs the script under "start" → node index.js
 *    npm run dev	        Runs the script under "dev" → nodemon index.js
 *    npm test	          Runs the script under "test"
 *
 * 🔹 Why npm start works without run
 *    • npm start, npm test, and npm restart are special shortcuts.
 *    • You can run them without run.
 *      ⚪ npm start
 *      ⚪ npm run start  ✅ (same thing
 *      ⚪ npm run dev   ✅ (must include run)
 *    • For any custom script (like dev, build, lint), you must use npm run.
 *
 * 🔹 Example:
 *            "scripts": {
 *                "start": "node app.js",
 *                "dev": "nodemon app.js"
 *             }
 *
 * Run normally:
 *              npm start
 *              # Runs -> node app.js
 *
 * Run development mode (auto reload):
 *                                      npm run dev
 *                                      # Runs -> nodemon app.js
 *
 * 🔹 Why use npm scripts?
 *    ✅ Shorter & cleaner command
 *    ✅ Cross-platform compatible (works on Windows, Mac, Linux
 *    ✅ Can chain multiple commands (like build + start)
 *
 *      "scripts": {
 *          "build": "echo Building app...",
 *          "start": "npm run build && node server.js"
 *       }
 *
 * ✅ In short:
 *              • npm scripts = custom shortcuts for commands.
 *              • defined in package.json under "scripts".
 *              • npm start runs automatically, but for others use npm run <script>.
 */
