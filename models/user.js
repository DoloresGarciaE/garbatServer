const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    pwd: String,
});

userSchema.set("collection", "user");

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
