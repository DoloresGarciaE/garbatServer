const mongoose = require('mongoose');

const schema = mongoose.Schema;
let colorSchema = new schema({
    name: String
});


userSchema.set("collection", 'color');

const colorModel = mongoose.Model('Color', colorSchema);

module.exports = { colorModel };
