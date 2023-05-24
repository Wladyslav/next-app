import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema.Types;

const FacilitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: ObjectId,
    ref: 'City',
    required: true,
  },
  location: {
    type: String,
  },
  website: {
    type: String,
  },
  googleMapsLink: {
    type: String, 
  },
  accessibility: {
    type: String,
  },
  amenities: [{
    type: String,
  }]
});

export default mongoose.models.Facility || mongoose.model('Facility', FacilitySchema);
