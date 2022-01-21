const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  brand: { type: mongoose.Types.ObjectId, ref: 'Brand' },
  year: String,
  km: Number,
  color: { type: mongoose.Types.ObjectId, ref: 'Color' },
  fuel: { type: mongoose.Types.ObjectId, ref: 'Fuel' },
  description: String,
  mark: Boolean,
  photos: [{ type: mongoose.Types.ObjectId, ref: 'Photo' }],
});

carSchema.set('collection', 'car');

const CarModel = mongoose.model('Car', carSchema);

CarModel.create = async function create(
  brand,
  year,
  km,
  color,
  fuel,
  description,
  mark,
  photos,
) {
  try {
    let car = new CarModel();
    car.brand = brand;
    car.year = year;
    car.km = km;
    car.color = color;
    car.fuel = fuel;
    car.description = description;
    car.mark = mark;
    car.photos = photos;

    car = await car.save();
    return car;
  } catch (error) {
    return error;
  }
};

module.exports = CarModel;
