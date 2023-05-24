// models/City.js
import mongoose from 'mongoose';

const CitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // Dodaj tutaj inne pola, które mogą być użyteczne, np. współrzędne geograficzne
});

export default mongoose.models.City || mongoose.model('City', CitySchema);
