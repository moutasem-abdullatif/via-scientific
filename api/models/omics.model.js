const mongoose = require('mongoose');

const omicsSchema = new mongoose.Schema({
  gene: String,
  transcript: String,
  exper_rep1: Number,
  exper_rep2: Number,
  exper_rep3: Number,
  control_rep1: Number,
  control_rep2: Number,
  control_rep3: Number,
});

const Omics = mongoose.model('Omics', omicsSchema);
module.exports = { Omics };
