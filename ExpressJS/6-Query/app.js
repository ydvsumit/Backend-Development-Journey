const express = require("express");
const { products } = require("../Common-Data/data");

const app = express();

/**
 * 🔹 2. What are Query Strings (req.query)?
 *    •  Query parameters come after a ? in the URL, and are used to filter, sort, or search data — they’re optional and don’t affect the path itself.
 *    •  OR By using query, we can send smaller amount of information to the server using this URL, and this information is usually used as parameters to for example a query in database or filter results.
 *
 * Example API URL Link to go through:
 *                                    • https://hn.algolia.com/api
 */

app.get("/api/v1", (req, res) => {
  console.log(req.query);
  res.send("Query data received");
});

app.get("/api/v1/query", (req, res) => {
  console.log(req.query);
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  // if search value of query is invalid because it matches the value in the data
  if (sortedProducts.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  res.status(200).json(sortedProducts);
});

// url be like: http://localhost:5000/api/v1/query?search=a&limit=1
// if we are not giving search and limit then it does not impact on our url, it returns all the products and if we provide any one of them, in that scenario it fullfill only that condition and return data
app.listen(5000, () => {
  console.log("Server is running on port: 5000");
});
