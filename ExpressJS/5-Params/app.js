const express = require("express");
const { products } = require("../Common-Data/data");

const app = express();

// Home Route
app.get("/", (req, res) => {
  res.json("Home Page");
});

// api endpoint for fetch all products
app.get("/api/products", (req, res) => {
  res.json(products);
});

//---------------------------------------------------------------------------------------------HardCoded Params-----------------------------------------------------------------------------------------------------------------------------------------
// 🔴 Hardcoded params for fetch specific product
app.get("/api/products/1", (req, res) => {
  const singleProduct = products.map((product) => {
    if (product.id === 1) {
      console.log("product = ", product);
      /**
       * 🔹 return product;
       *    - Returns a value for that one iteration; but this does not stop the map or return from the outer route handler — it only returns from the callback for that item. For non-matching items the callback returns undefined (implicitly).
       */
      return product;
    }
  });
  /**
   * 🔹 Why we see undefined?
   * - map() always returns a new array the same length as the input. For each element the callback returns a value — but if the callback doesn’t explicitly return anything it implicitly returns undefined.
   * - In your code you return product only when product.id === 1. For every other item the if body is skipped and the callback returns undefined. So you end up with an array containing mostly undefined and one product object.
   *
   * 🔹 singleProduct is now an array of same length as products, e.g. [undefined, undefined, {id:1,...}, undefined].
   * 🔹 console.log(singleProduct); => Prints the array with many undefineds and one object.
   * 🔹 res.json(singleProduct); => Sends that array back to the client.
   */
  console.log(singleProduct);
  res.json(singleProduct);
});

// 🔴 Fetch some specific data from product object
app.get("/api/products/4", (req, res) => {
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  console.log(newProduct);
  res.json(newProduct);
});

// 🔴 Best way to get a single object is find() method (not an array):
app.get("/api/products/2", (req, res) => {
  const singleProductObject = products.find((product) => {
    return product.id === 2;
  });

  if (!singleProductObject) {
    res.status(404).json({ error: "Product Not Found" });
  }
  res.json(singleProductObject);
});

// 🔴 If you expect multiple matches: use .filter() (returns array)
// If you want an array of matches (e.g., multiple products may share a property):
app.get("/api/products/3", (req, res) => {
  const productMatches = products.filter((product) => {
    return product.id === 3;
  });

  if (!productMatches) {
    res.status(404).json({ error: "Product Not Found" });
  }
  res.json(productMatches);
});

//---------------------------------------------------------------------------------------------Dynamic Taking Params (Best Way)-----------------------------------------------------------------------------------------------------------------------------------------
// 🔴 Your route "/api/products/5" is static. Use "/api/products/:id" to handle any id.
// Always remember params is coming from url and it's always in string
app.get("/api/products/:productId", (req, res) => {
  const singleProductData = products.find(
    // manually convert params to Number because inside our data id is a number
    (product) => product.id === Number(req.params.productId)
  );

  if (!singleProductData) {
    res.status(404).send("Product does not exist");
  }

  return res.json(singleProductData);
});

app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
