import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import { connectDB } from './config/db.js';
import { errorHandler } from './middlewares/error.middleware.js';

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

app.use('/api', authRoutes);

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    status: 404,
    message: 'Route not found!',
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));
