// 🔹 Serving Static Files using Express (Much Easier 🚀)
// With Express.js, it’s just one line:

const express = require("express");
const app = express();

app.use(express.static("public")); // 'public' is a folder

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});
