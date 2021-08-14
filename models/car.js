const mongoose = require("mongoose");
let carSchema = new mongoose.Schema({
  brand: { type: mongoose.Types.ObjectId, ref: "Brand" },
  year: String,
  km: Number,
  color: { type: mongoose.Types.ObjectId, ref: "Color" },
  fuel: { type: mongoose.Types.ObjectId, ref: "Fuel" },
  description: String,
  mark: Boolean,
  photos: [{ type: mongoose.Types.ObjectId, ref: "Photo" }],
});

carSchema.set("collection", "car");

const carModel = mongoose.model("Car", carSchema);

module.exports = carModel;
