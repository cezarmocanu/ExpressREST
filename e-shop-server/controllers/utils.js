const jwt = require("jsonwebtoken");

const checkToken = async (req, res, next) => {
  const { authorization } = req.headers;
  if (authorization === undefined || authorization.length < 8)
    return res.status(500).send("Access not allowed. Token is expired");

  const token = authorization.slice(7, authorization.length);
  try {
    return await jwt.verify(token, process.env.JWT_SECRET_KEY, () => {
      next();
    });
  } catch (err) {
    return res.status(500).send("Access not allowed. Token is expired");
  }
};

module.exports = {
  checkToken,
};
