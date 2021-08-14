const mongoose = require("mongoose");

let brandSchema = new mongoose.Schema({
    name: String,
});

brandSchema.set("collection", "brand");

const brandModel = mongoose.model("Brand", brandSchema);

module.exports = brandModel;