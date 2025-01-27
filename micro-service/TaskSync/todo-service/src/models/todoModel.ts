import { Schema, model, Document, Types } from 'mongoose';
import { TodoDocument } from '../shared/types';


const todoSchema = new Schema<TodoDocument>({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  completed: { type: Boolean, default: false },
  username: { type: String, ref: 'User', required: true }, // Reference to User document
});

const Todo = model<TodoDocument>('Todo', todoSchema);

export default Todo;