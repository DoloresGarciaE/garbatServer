const mongoose = require('mongoose');

const schema = new mongoose.Schema;
let brandSchema = new schema({
    name: String
});

brandSchema.set('collection', 'brand');

const brandModel = mongoose.Model('Brand', brandSchema);

module.exports(brnadModel);