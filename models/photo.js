const mongoose = require('mongoose');

const schema = new mongoose.Schema;
let photoSchema = new schema({
    url: String,
    type: String
});

photoSchema.set('collection', 'photo');

const photoModel = mongoose.Model('Photo', photoSchema);

module.exports(photoModel);