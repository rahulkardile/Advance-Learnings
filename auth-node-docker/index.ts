import express from 'express';
import dotenv from 'dotenv';

const app = express();
const PORT = parseInt(process.env.PORT) | 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});