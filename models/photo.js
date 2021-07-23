const mongoose = require('mongoose');

let photoSchema = new mongoose.Schema({
    url: String,
    type: String,
});

photoSchema.set("collection", "photo");

const photoModel = mongoose.model("Photo", photoSchema);

module.exports = photoModel;