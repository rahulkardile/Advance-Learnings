import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import todoRoutes from './routes/todoRoutes';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/todos', todoRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('To-Do Service connected to MongoDB'))
  .catch((err) => console.error(err));

app.listen(5002, () => console.log('To-Do Service running on port 5002'));

