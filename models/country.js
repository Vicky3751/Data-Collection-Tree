const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  country: { type: String },
  countrywerbreq: { type: Number },
  countrytimespent: { type: Number },
});

const country = mongoose.model("Country", countrySchema);

module.exports = country;
