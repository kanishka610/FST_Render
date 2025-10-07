const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: String,
  description: String,
  date: String
});

module.exports = mongoose.model('Activity', activitySchema);
