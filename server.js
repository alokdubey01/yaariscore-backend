const express = require("express");
const bodyparser = require("body-parser");
const app = express();
const mongoose = require("mongoose")
const router = require('./routes/games');
const path = require("path");
const fs = require('fs');
const cors = require("cors");
const port = process.env.PORT || 8000;
app.use(cors());
app.use('/',router)
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);
app.set("view engine", "ejs");
app.use("/", express.static("public"));
var data = fs.readFileSync('game.json');
   
var elements = JSON.parse(data);
app.get('/', alldata);
   
function alldata(request, response) {
       
    // Returns all information about the elements
    response.send(elements);
}
  

// const url = "mongodb://localhost:27017/yaariscore"

// mongoose.connect(url, {
//     useNewUrlParser:false
// }).then(() =>{
//     console.log("Connected...")
// }).catch((err) =>{
//     console.log("Not Connected...")
// })
// mongoose.set('strictQuery', true);

// app.get("/", (req, res) => {
//   res.send("Link is working fine");
//   // res.redirect('https://www.yaariscore.com')
// });

app.listen(port, () => {
  console.log(`Server started on ${port}`);
  // https://yaariscore-bacend.onrender.com
});
