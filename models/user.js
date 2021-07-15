const mongoose = require('mongoose');

const schema = mongoose.Schema;
let userSchema = new schema({
    name: String,
    surname: String,
    email: String,
    pwd: String,
});

userSchema.set("collection", 'user');

const userModel = mongoose.Model('User', userSchema);

module.exports = { userModel };
