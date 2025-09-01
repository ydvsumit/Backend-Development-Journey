/**
 * math.mjs OR math.js (with "type": "module" in package.json)
 *
 * You define a function add.
 * You use the export keyword so it can be imported into other files.
 * ----------------------------------------------------------------------------------
 * Named Export:
 * You’re creating a "named export" called add.
 * Think of it like a label that says:
 *                                      moduleExports = {
 *                                         add: function add(a, b) { return a + b; }
 *                                       }
 * So the module math.js is essentially exporting an object with keys = export names.
 *
 * Default Export:
 * - while exporting, we can add default with export; that is called default export.
 * - when importing default export we don't need to destructure {} it, we can directly import them.
 */

// Named Export:
export function add(a, b) {
  return a + b;
}

// Default Export:
export default function sub(a, b) {
  return a - b;
}
