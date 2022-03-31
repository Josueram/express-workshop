const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, "debbugkey");
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ code: 401, message: "No tienes permiso" });
  }
}

module.exports = (req, res, next) => {
  return res.status(404).json({ code: 400, message: "URL no encontrada" });
}