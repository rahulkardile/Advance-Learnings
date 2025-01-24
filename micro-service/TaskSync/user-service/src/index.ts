import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/users', userRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log('User Service connected to MongoDB'))
  .catch((err) => console.error(err));

app.listen(5001, () => console.log('User Service running on port 5001'));
