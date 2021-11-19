const mongoose = require("mongoose");

const deviceSchema = new mongoose.Schema({
  device: { type: String },
  devicewerbreq: { type: Number },
  devicetimespent: { type: Number },
  which: { type: String },
});

const device = mongoose.model("Device", deviceSchema);

module.exports = device;
