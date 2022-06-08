const express = require("express");
const path = require("path");
const db = require("../database/index.js");

var exampleData = require("../example-data.json");

const app = express();

app.use(express.static(path.join(__dirname, "/../client")));
app.use(express.urlencoded({ extended: true }));

app.get('/index', (req, res) => {
  // get all veggie/fruit data from DB
  res.status(200).json(exampleData);
});

app.post('/add-item', (req, res) => {
  // handle post request for adding veggie/fruit w/ color, inital count set to 0

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

  // MAKE SURE ERRORS ARE PASSED TO THE CLIENT
})

app.post('/click-item', (req, res) => {
  // handle post request for adding count on veggie/fruit
})

const port = 7777;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})