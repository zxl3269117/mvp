const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

const app = express();

app.use(express.static(path.join(__dirname, "/../client")));
app.use(express.urlencoded());

app.get("/index", (req, res) => {
  // get all veggie/fruit data from DB
  var resData = ["Hello world"];
  res.status(200).json(resData);
});

app.post("/add-item", (req, res) => {
  // handle post request for adding veggie/fruit w/ color, inital count set to 1
})

app.post("/click-item", (req, res) => {
  // handle post request for adding count on veggie/fruit
})

const port = 7777;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})