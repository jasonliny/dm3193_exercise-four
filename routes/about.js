const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Time: ", Date.now());
  next();
});

// define the about page route
router.get("/", (req, res) => {
  res.send("About Page!");
});

router.get("/me", (req, res) => {
  res.send("About me");
});

module.exports = router;
