const mongoose = require("../database/index");
const uuid = require("uuid");
const bcryptjs = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  id: {
    type: String,
    default: uuid.v4,
    unique: true,
  },
  nome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },
  senha: {
    type: String,
    required: true,
    select: false,
  },
  telefones: [
    {
      numero: {
        type: Number,
        required: true,
      },
      ddd: {
        type: Number,
        required: true,
      },
    },
  ],
  data_criacao: {
    type: Date,
    default: Date.now(),
  },
  data_atualizacao: {
    type: Date,
    default: Date.now(),
  },
  ultimo_login: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre("save", async function (next) {
  const hash = await bcryptjs.hash(this.senha, 10);
  this.senha = hash;
  next();
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
