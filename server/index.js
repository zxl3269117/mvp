const express = require("express");
const path = require("path");

var exampleData = require("../example-data.json");

const app = express();

app.use(express.static(path.join(__dirname, "/../client")));
app.use(express.json({ extended: false }));

app.get("/index", (req, res) => {
  // get all veggie/fruit data from DB
  res.status(200).json(exampleData);
});

app.post("/add-item", (req, res) => {
  // handle post request for adding veggie/fruit w/ color, inital count set to 0
  // add item to DB
  // if duplicate is found, count ++
    // after successfully added it to DB, get all data from DB
      // response with the data

  console.log(req.body);
  exampleData = exampleData.push(req.body);
  res.status(201);
})

app.post("/click-item", (req, res) => {
  // handle post request for adding count on veggie/fruit
})

const port = 7777;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})