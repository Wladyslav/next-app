// models/Attraction.js
import mongoose from 'mongoose';
const { ObjectId } = mongoose.Schema;

const AttractionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      facility: {
        type: ObjectId,
        ref: 'Facility',
        required: true,
      },
      category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
      },
      subcategory: {
        type: Schema.Types.ObjectId,
        ref: 'Subcategory',
        required: true,
      },
      hours: {
        monday: {
            open: String,
            close: String
        },
        tuesday: {
            open: String,
            close: String
        },
        wednesday: {
            open: String,
            close: String
        },
        thursday: {
            open: String,
            close: String
        },
        friday: {
            open: String,
            close: String
        },
        saturday: {
            open: String,
            close: String
        },
        sunday: {
            open: String,
            close: String
        }
    },
      price: {
        type: String,
      },
      contact: {
        type: String, 
      },
      images: [{
        type: String, 
      }],
      reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review', 
      }],
      
      ageRestriction: {
        type: String,
      }

});

export default mongoose.models.Attraction || mongoose.model('Attraction', AttractionSchema);
