const requestRecieved = (req, res, next) => {
  console.log("Request received at:", new Date().toISOString());
  next(); // go to the next middleware or route
};

module.exports = requestRecieved;
