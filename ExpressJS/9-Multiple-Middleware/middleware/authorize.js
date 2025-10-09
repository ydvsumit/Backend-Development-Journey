const authorize = (req, res, next) => {
  console.log("Authorized User");
  next(); // pass control to next middleware or route
};

const authorizeByUser = (req, res, next) => {
  // we can do some functionality here
  const { user } = req.query;
  if (user === "john") {
    // attaching a user object with my request
    req.user = {
      name: "John",
      id: 1,
    };
    next();
  } else {
    res.status(401).send("Unauthorized User");
  }
};

module.exports = { authorize, authorizeByUser };
