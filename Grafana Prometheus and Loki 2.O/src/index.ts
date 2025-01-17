import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.get('/heavy-task', async (req: Request, res: Response) => {
    await new Promise(resolve => setTimeout(resolve, 10000)); // Wait for 10 seconds
    res.status(200).json({ message: 'Heavy task completed', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
