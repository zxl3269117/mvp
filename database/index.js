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
  name: {
    type: String,
    require: true
  },
  color: {
    type: String,
    require: true
  },
  category: {
    type: String,
    require: true
  },
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
  if(entry) {
    return rainbow.updateOne({ _id: entry._id }, entry).exec();
  } else {
    return rainbow.updateMany({}, {count: 0}).exec();
  }
}
