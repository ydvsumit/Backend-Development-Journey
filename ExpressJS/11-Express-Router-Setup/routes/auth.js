const express = require("express");

const router = express.Router();

// Adding Middleware to a Router
// 📌 This middleware runs only for routes inside this router.
router.use((req, res, next) => {
  console.log("auth route accessed");
  next();
});

router.post("/", (req, res) => {
  console.log(req.body);
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }
  res.status(401).send("Please Provide Valid Credentials");
});

module.exports = router;
