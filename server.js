const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors');
const port = process.env.PORT || 8000
app.use(cors())

app.use('/cube',express.static("public/cube"));
app.use('/2048',express.static("public/2048"));
app.use('/car',express.static("public/highway-race/dist"));
app.use('/tower',express.static("public/tower"));
app.use('/maze',express.static("public/pickle_rick"));
app.use('/red-ball',express.static("public/platform-game-engine"));
app.use('/memoryIt',express.static("public/Dinasour"));
app.use('/tile-block',express.static("public/tile-block/dist"));
app.use('/astray',express.static("public/Astray"));
app.use('/aviator',express.static("public/TheAviator"));

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
  res.sendFile(path.join(__dirname, "public/highway-race/dist/index.html"));
});

app.get("/tower", (req, res) => {
  res.sendFile(path.join(__dirname, "public/tower/app.html"));
});

app.get("/maze", (req, res) => {
  res.sendFile(path.join(__dirname, "public/pickle_rick/app.html"));
});

app.get("/tetris", (req, res) => {
  res.sendFile(path.join(__dirname, "public/tetris/app.html"));
});

app.get("/memoryIt", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Dinasour/app.html"));
});

app.get("/tile-block", (req, res) => {
  res.sendFile(path.join(__dirname, "public/tile-game/dist/index.html"));
});

app.get("/red-ball", (req, res) => {
    // there a issue with this game
  res.sendFile(path.join(__dirname, "public/platform-game-engine/index.html"));
});

app.get("/astray", (req, res) => {
  res.sendFile(path.join(__dirname, "public/Astray/index.html"));
});

app.get("/aviator", (req, res) => {
  res.sendFile(path.join(__dirname, "public/TheAviator/index.html"));
});

app.listen(port, () => {
  console.log(`Server started on ${port}`);
});