const express = require("express");
const UserModel = require("../models/User");
const bcryptjs = require("bcryptjs");
const authConfig = require("../config/auth.json");
const jwt = require("jsonwebtoken");

const router = express.Router();

const generateToken = (user = {}) => {
  return jwt.sign(
    {
      _id: user._id,
    },
    authConfig.secret,
    {
      expiresIn: 1800,
    }
  );
};

router.post("/signup", async (req, res) => {
  const { email } = req.body;

  if (await UserModel.findOne({ email })) {
    return res.status(401).json({
      mensagem: "Email já existente",
    });
  }

  const user = await UserModel.create(req.body);

  user.senha = undefined;

  return res.json({
    id: user.id,
    data_criacao: user.data_criacao,
    data_atualizacao: user.data_atualizacao,
    ultimo_login: user.ultimo_login,
    token: generateToken(user),
  });
});

router.post("/signin", async (req, res) => {
  const { email, senha } = req.body;

  const user = await UserModel.findOne({ email }).select("+senha");

  if (!user) {
    return res.status(401).json({
      mensagem: "Usuário e/ou senha inválidos",
    });
  }

  if (!(await bcryptjs.compare(senha.trim(), user.senha))) {
    return res.status(401).json({
      mensagem: "Usuário e/ou senha inválidos",
    });
  }

  return res.json({
    id: user.id,
    data_criacao: user.data_criacao,
    data_atualizacao: user.data_atualizacao,
    ultimo_login: user.ultimo_login,
    token: generateToken(user),
  });
});

module.exports = router;
