const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 8000;
app.use(cors());
app.set("view engine", "ejs");
app.use(express.static('public'))

app.get("/", (req, res) => {
  res.send("Link is working fine");
});
app.get("/cube", (req, res) => {
  res.render("cube");
});
app.get("/astray", (req, res) => {
  res.render("astray");
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
