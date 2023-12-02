const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Token não recebido",
    });
  }

  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({
      message: "Tipo do token inválido",
    });
  }

  const [scheme, token] = parts;

  if (scheme.indexOf("Bearer") !== 0) {
    return res.status(401).json({
      message: "Token mal formatado",
    });
  }

  return jwt.verify(token, authConfig.secret, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Sessão inválida" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ message: "Não autorizado" });
      } else {
        return res.status(401).json({ message: "Erro ao validar o token" });
      }
    }

    req.userLogged = decoded;

    return next();
  });
};
