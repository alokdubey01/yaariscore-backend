const express = require("express");
const router = express.Router();

router.get("/cube", (req, res) => {
  res.render("cube");
});
router.get("/astray", (req, res) => {
  res.render("astray");
});
router.get("/2048", (req, res) => {
  res.render("twenty");
});
router.get("/highway", (req, res) => {
  res.render("highway");
});
router.get("/tower", (req, res) => {
  res.render("tower");
});
router.get("/aviator", (req, res) => {
  res.render("aviator");
});
router.get("/pickle_rick", (req, res) => {
  res.render("maze");
});
router.get("/redball", (req, res) => {
  res.render("redball");
});
router.get("/memory-it", (req, res) => {
  res.render("memoryit");
});
router.get("/traffic-run", (req, res) => {
  res.render("trafficrun");
});
router.get("/tictactoe", (req, res) => {
  res.render("tictactoe");
});

module.exports = router;
