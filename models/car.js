const mongoose = require('mongoose');

const schema = new mongoose.Schema;
let carSchema = new schema({
    brand: { type: schema.Types.ObjectId, ref: 'Brand' },
    year: String,
    km: Number,
    color: { type: schema.Types.ObjectId, ref: 'Color' },
    fuel: { type: schema.Types.ObjectId, ref: 'Fuel' },
    description: String,
    mark: Boolean,
    photos: [{ type: schema.Types.ObjectId, ref: 'Photo' }]
});

carSchema.set('collection', 'car');

const carModel = mongoose.Model('Car', carSchema);

module.exports(carModel);