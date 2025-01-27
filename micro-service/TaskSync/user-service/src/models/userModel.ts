import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  username: {type: String, required: true, unique: true, min: 2},
  email: {type: String, required: true, unique: true, min: 5},
  password: { type: String, required: true }
});

export default mongoose.model('User', UserSchema);

