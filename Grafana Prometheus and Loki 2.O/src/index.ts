import express, { Request, Response } from 'express';
const app = express();
const PORT = 3300;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    res.status(200).json({ status: 'Hello from express server', timestamp: new Date().toISOString() });
});

app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({ status: 'UP', timestamp: new Date().toISOString() });
});

app.get('/slow', async (req: Request, res: Response) => {
    try {
        const result = await performHeavyComputation();

        // Simulate a random failure (e.g., a 30% chance of failure)
        if (Math.random() < 0.1) {
            throw new Error('Simulated failure during heavy computation');
        }

        res.status(200).json({
            message: 'Heavy task completed successfully',
            result,
            timestamp: new Date().toISOString(),
        });
    } catch (error:any) {
        res.status(500).json({
            message: 'Heavy task failed',
            error: error.message,
            timestamp: new Date().toISOString(),
        });
    }
});

async function performHeavyComputation(): Promise<number[]> {
    return new Promise((resolve, reject) => {
        try {
            const data: number[] = [];
            for (let i = 0; i < 1e5; i++) {
                // Perform some heavy computation (e.g., random data generation)
                data.push(Math.random());
            }
            resolve(data);
        } catch (error) {
            reject(error);
        }
    });
}

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
