const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
app.use(cors())

app.use('/cube',express.static("public/cube"));
app.use('/2048',express.static("public/2048"));
app.use('/car',express.static("public/car"));
app.use('/tower',express.static("public/tower"));
app.use('/maze',express.static("public/pickle_rick"));
app.use('/pong',express.static("public/pong"));
app.use('/tetris',express.static("public/tetris"));

app.get("/", (req, res) => {
  res.send("Hii i am working fine");
});

app.get("/cube", (req, res) => {
  res.sendFile(path.join(__dirname, "public/cube/app.html"));
});

app.get("/2048", (req, res) => {
  res.sendFile(path.join(__dirname, "public/2048/app.html"));
});

app.get("/car", (req, res) => {
  res.sendFile(path.join(__dirname, "public/2048/app.html"));
});

app.get("/tower", (req, res) => {
  res.sendFile(path.join(__dirname, "public/tower/app.html"));
});

app.get("/maze", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pickle_rick/app.html"));
});

app.get("/pong", (req, res) => {
    // there a issue with this game
  res.sendFile(path.join(__dirname, "public/pong/app.html"));
});

app.get("/tetris", (req, res) => {
    // there a issue with this game
  res.sendFile(path.join(__dirname, "public/tetris/app.html"));
});

module.exports = app;
