import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // inne pola, które chcesz przechowywać dla klientów
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
