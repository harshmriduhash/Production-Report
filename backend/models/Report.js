const mongoose = require('mongoose');

const ReportSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  data: { type: Array, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Report', ReportSchema);