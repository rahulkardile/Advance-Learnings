import mongoose, { Document, Schema } from 'mongoose';

export interface UserDocument extends Document {
  name: string;
  username: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<UserDocument>({
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true, min: 2 },
  email: { type: String, required: true, unique: true, min: 5 },
  password: { type: String, required: true },
});

export default mongoose.model<UserDocument>('User', UserSchema);
