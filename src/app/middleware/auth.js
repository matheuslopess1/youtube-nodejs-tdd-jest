const jwt = require("jsonwebtoken");
const { promisify } = require("util");

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: "Token not provided" });

  const [type, token] = authorization.split(" ", 2);

  if (type !== "Bearer")
    return res.status(401).json({ message: "Token type should be Bearer" });

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.SECRET);

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalid" });
  }

  return next();
};
