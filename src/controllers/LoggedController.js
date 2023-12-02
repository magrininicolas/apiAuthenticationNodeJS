const express = require("express");
const UserModel = require("../models/User");
const router = express.Router();

router.get("/users/:id", async (req, res) => {
  const userId = req.params.id;

  const user = await UserModel.findById(userId, { senha: 0 });

  if (!user) {
    return res.status(404).json({ message: "Usuário não encontrado" });
  }

  res.status(200).json({ user });
});

router.get("/users", async (req, res) => {
  const users = await UserModel.find({}, { senha: 0 });

  if (!users) {
    return res.status(404).json({ message: "Sistema vazio" });
  }

  res.status(200).json({ users });
});

module.exports = router;
