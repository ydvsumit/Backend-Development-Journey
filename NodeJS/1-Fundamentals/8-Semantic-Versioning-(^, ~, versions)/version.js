/**
 * Semantic Versioning (semver) in Node.js — this is what you see in package.json dependencies like ^4.17.21 or ~1.2.3
 *
 * 🔹 What is Semantic Versioning (SemVer)?
 *    - Semantic Versioning means every package version follows a MAJOR.MINOR.PATCH format: MAJOR.MINOR.PATCH
 *        • MAJOR → Breaking changes
 *        • MINOR → New features (backward-compatible)
 *        • PATCH → Bug fixes (backward-compatible)
 *
 * Example:
 *          • 1.0.0 → First stable release
 *          • 1.1.0 → Added a feature (no breaking changes)
 *          • 1.1.1 → Bug fix
 *
 * 🔹 Symbols in SemVer (^, ~, etc.)
 *    - In package.json, you usually see:
 *                                        "dependencies": {
 *                                            "express": "^4.17.21",
 *                                            "lodash": "~4.17.15"
 *                                          }
 *
 * 1. Caret ( ^ ):
 *                • ^4.17.21 → Install the latest minor/patch updates, but lock MAJOR.
 *                • Allowed: 4.x.x (≥4.17.21 and <5.0.0).
 *                • Example: If a new version 4.20.0 comes, it’s allowed.
 *                • If 5.0.0 comes, NOT allowed (because major changes may break code).
 *                👉 Caret is the most common — keeps your project up-to-date without breaking.
 *
 * 2. Tilde ( ~ ):
 *                • ~4.17.15 → Install the latest patch updates, but lock MINOR.
 *                • Allowed: 4.17.x (≥4.17.15 and <4.18.0).
 *                • Example: If 4.17.20 comes, it’s allowed.
 *                • If 4.18.0 comes, NOT allowed.
 *                👉 Tilde is safer — only allows bug fixes, not new features.
 *
 * 3. Exact Version:
 *                  • "express": "4.17.21"
 *                  • Installs only that version, no updates.
 *                  • Very strict, rarely used in real projects.
 *
 * 4. Other Symbols:
 *                  • >1.2.3 → Greater than 1.2.3
 *                  • >=1.2.3 → Greater than or equal to 1.2.3
 *                  • <2.0.0 → Any version less than 2.0.0
 *                  • * → Any version (not safe, rarely used)
 *                  • latest → Always fetch latest version from npm
 */

/**
 * Quick Example of package.json:
 *                                "dependencies": {
 *                                    "express": "^4.16.0",
 *                                    "mongoose": "~5.11.0",
 *                                    "cors": "2.8.5"
 *                                 }
 *
 *        • Express → Can install 4.17.21, 4.19.0 (minor/patch ok), but not 5.x.x.
 *        • Mongoose → Can install 5.11.15, 5.11.20 (patch ok), but not 5.12.0.
 *        • Cors → Must install exactly 2.8.5.
 *
 * 👉 In real projects, most use ^ for libraries (keeps you up-to-date but avoids breaking changes).
 * 👉 Use ~ or exact versions if you want stability.
 */

// -----------------------------------------How npm decides which version to install when multiple ranges are defined in Node.js------------------------------------------------
/**
 * 🔹 Case: Multiple Version Ranges
 *    - Sometimes in package.json, or inside dependencies of dependencies, you’ll see multiple version ranges like:
 *           "dependencies": {
 *               "express": "^4.17.0 || ~4.16.0"
 *           }
 *
 *
 * This means:
 *              • ^4.17.0 → Allows 4.17.0 up to <5.0.0
 *              • ~4.16.0 → Allows 4.16.0 up to <4.17.0
 * So, npm checks:
 * 👉 Is there a version that satisfies both?
 *        • If yes → Installs the highest version that matches.
 *        • If no → Installs based on the "OR" condition.
 *
 *
 * 🔹 Example 1: ^4.17.0 || ~4.16.0
 *      • Latest available = 4.19.2
 *      • Both ranges allow versions < 5.0.0 → ✅ 4.19.2 is chosen.
 *
 *
 * 🔹 Example 2: ~4.16.0 || ^5.0.0
 *      • ~4.16.0 → Accepts 4.16.x only
 *      • ^5.0.0 → Accepts 5.x.x
 *      • If latest = 5.2.1 → npm installs 5.2.1 (because it's higher, and satisfies one range).
 *
 *
 * 🔹 Example 3: >=2.0.0 <3.0.0 || ^4.0.0
 *      • First range: 2.x.x only
 *      • Second range: 4.x.x only
 *      • If latest = 4.5.0 → npm installs 4.5.0
 *      • If only 2.9.0 available → npm installs 2.9.0
 *
 *
 * 🔹 npm’s Decision Rules (Simplified)
 *      • Find the versions that satisfy the range(s).
 *      • Pick the highest version available that satisfies.
 *      • If multiple ranges are separated with ||, npm tries them from left to right, but always prefers the highest version overall.
 *
 *
 * 🔹 Why this matters
 *      • You’ll often see complex ranges in big projects (react, express, etc.)
 *      • This ensures compatibility across dependencies, while still allowing updates.
 */
