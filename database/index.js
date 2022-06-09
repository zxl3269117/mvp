const mongoose = require("mongoose");
const { Schema } = mongoose;

const url = "mongodb://localhost:27017/rainbow";
mongoose.connect(url, { useNewUrlParser: true });

// check DB connection
const db = mongoose.connection;
db.once('open', _ => {
  console.log('Database connected:', url);
})

db.on('error', err => {
  console.error('connection error:', err);
})

const rainbowSchema = new Schema({
  name: String,
  color: String,
  category: String,
  count: Number
})

const rainbow = mongoose.model('Rainbow', rainbowSchema);

// save a new entry to DB
module.exports.save = (entry) => {
  return rainbow.updateOne(entry, entry, { upsert: true }).exec();
}

// retrieve either ONE entry that matches OR ALL entries in DB
module.exports.fetch = (entry) => {
  if (entry) {
    return rainbow.find({ name: entry.name }).exec();
  } else {
    return rainbow.find({}).exec();
  }
}

// update DB when item clicked
module.exports.update = (entry) => {
  return rainbow.updateOne({ name: entry.name }, entry).exec();
}
