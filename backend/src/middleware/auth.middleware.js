const authMiddleware = (req, res, next) => {
  console.log("Auth middleware hit");
  next();
};

module.exports = authMiddleware;