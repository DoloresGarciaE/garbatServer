const mongoose = require('mongoose');

let colorSchema = new mongoose.Schema({
    name: String,
});


colorSchema.set("collection", "color");

const colorModel = mongoose.model("Color", colorSchema);

module.exports = colorModel;
