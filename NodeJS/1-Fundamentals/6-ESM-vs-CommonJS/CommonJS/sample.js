const sub = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

// we can directly export our function in commonJS, here not like ESM default
// ➡️ In CommonJS, module.exports = {} creates an object.
module.exports = { sub, multiply };
