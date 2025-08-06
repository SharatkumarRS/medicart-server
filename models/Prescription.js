const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Prescription", prescriptionSchema);
