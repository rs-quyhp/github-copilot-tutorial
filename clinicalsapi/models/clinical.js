const mongoose = require("mongoose");

const ClinicalSchema = new mongoose.Schema({
  componentName: {
    type: String,
    required: true,
  },
  componentValue: {
    type: String,
    required: true,
  },
  measuredDateTime: {
    type: Date,
    default: Date.now,
    required: true,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
  },
});

module.exports = mongoose.model("Clinical", ClinicalSchema);
