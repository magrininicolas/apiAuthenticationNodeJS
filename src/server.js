const express = require("express");
const AuthController = require("./controllers/AuthController");
const LoggedController = require("./controllers/LoggedController");

const authenticateMiddleware = require("./middlewares/authenticate");

const app = express();

app.use(express.json());

app.use("/auth", AuthController);
app.use("/logged", LoggedController);

app.listen(3001, () => {
  console.log("Server is running");
});
