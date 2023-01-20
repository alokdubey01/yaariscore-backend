const express = require("express");
const path = require('path');
const router = express.Router();

// router.get("/app", function (req, res) {
//   res.sendFile(express.static(path.join(__dirname, '../public/2048')));
// });
router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/cube/app.html"));
});

module.exports = router