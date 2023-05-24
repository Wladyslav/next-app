// models/Subcategory.js

import mongoose from 'mongoose';

const SubcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
      },
      category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true
      },
      description: {
        type: String,
        required: true,
        maxlength: [500, 'Description can not be more than 500 characters']
      }
});

export default mongoose.models.Subcategory || mongoose.model('Subcategory', SubcategorySchema);
