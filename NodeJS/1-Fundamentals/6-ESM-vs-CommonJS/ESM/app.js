/**
 * ES Modules: ECMAScript standard (ES6, 2015)
 * .mjs (or .js with "type": "module" in package.json)
 *
 * 1. Official JavaScript standard, works in browser + Node
 * 2. Asynchronous (uses promises internally)
 *        - Example: import x from './file.js' resolves asynchronously
 *
 * 3. Exports:-> ESM: Uses export / export default
 *        - Example:-> export { foo, bar };
 *
 * 4. undefined in strict mode
 * 5. To use ESM in .js, you must add this in package.json:
 *       {
 *           "type": "module"
 *       }
 *    Or use .mjs extension.
 *
 */

/**
 * or use app.mjs
 * You use import { add } from './math.mjs' to pull in the named export add.
 * You call add(2, 3), which returns 5.
 */
import sub, { add } from "./math.js";

// Named Export
console.log(add(2, 3)); // 5
// Default Export
console.log(sub(5, 3)); // 2

/**
 * Named Export:
 * Note:
 * The import { add } from './math.js' syntax can look confusing at first glance, because it uses curly braces {} but we are not passing an object literal or returning a string.
 * Let me break it down for you clearly:
 *  - The { add } syntax is destructuring the named exports from the module, and we need to use same name that what we define at time time of writing.
 *  - It's equivalent to:
 *                        import * as math from './math.js';
 *                        console.log(math.add(2, 3));
 *    where math is like:
 *                        {
 *                           add: [Function: add]
 *                        }
 *
 *  - Then { add } is just a shorter way of saying: const add = math.add;
 *
 * $ Important clarification:
 *    - The function add itself returns a number (a + b), not a string.
 *    - The curly braces {} in the import statement do not mean an object is being returned; they are part of ES Module named import syntax, which looks like object destructuring.
 *
 * ✅ That’s why the syntax is:
 *    - export function add(...) → creates a named export.
 *    - import { add } from ... → picks the add export from that module.
 * ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 *
 * Default Export:
 * - import anyName from './math.js';
 */
