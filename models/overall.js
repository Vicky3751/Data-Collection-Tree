const mongoose = require("mongoose");

const overallSchema = new mongoose.Schema({
  overallwerbreq: { type: Number },
  overalltimespent: { type: Number },
});

const overAll = mongoose.model("Overall", overallSchema);

module.exports = overAll;
