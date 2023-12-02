const express = require("express");
const router = express.Router();

console.log("controller");
router.get("/users", (req, res) => {
  return res.json({});
})

module.exports = router;