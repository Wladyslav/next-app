// models/Category.js

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name can not be more than 50 characters']
      },
      description: {
        type: String,
        required: true,
        maxlength: [500, 'Description can not be more than 500 characters']
      }
  });
  
  export default mongoose.models.Category || mongoose.model('Category', CategorySchema);
  