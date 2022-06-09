const express = require("express");
const path = require("path");
const db = require("../database/index.js");

var exampleData = require("../example-data.json");

const app = express();

app.use(express.static(path.join(__dirname, "/../client")));
app.use(express.urlencoded({ extended: true }));

// get all veggie/fruit data from DB
app.get('/index', (req, res) => {
  db.fetch()
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      res.status(500).send(err);
    })
});

// handle post request for adding veggie/fruit with color with inital count set to 0
app.post('/add-item', (req, res) => {

  console.log(req.body);

  var entry = req.body;

  // convert all data to lowercase
  for(var k in entry) {
    entry[k] = entry[k].toLowerCase();
  }

  // search DB to check duplicate entry
  db.fetch(entry)
    .then(result => {
      // check if entry exists in DB
      if (result.length !== 0) {
        res.status(406).send('Error: already exsit');
      } else {
        entry.count = 0;
        // save entry to DB
        db.save(entry)
          .then(result => {
            console.log('added successfully', result);
            res.status(201).send(result);
          })
          .catch(err => {
            res.status(500).send('unable to save entry to database. Error message: ' + err);
          })
      }
    })
    .catch(err => {
      res.status(500).send('fail to fetch entry. Error message: ' + err);
    })
})

// handle post request for adding count on veggie/fruit
app.patch('/click-item', (req, res) => {
  var clicked = req.body;
  db.update(clicked)
    .then(result => {
      res.sendStatus(204);
    })
    .catch(err => {
      res.sendStatus(500);
    })
})

const port = 7777;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})