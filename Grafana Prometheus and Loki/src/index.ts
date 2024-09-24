import express from "express";
import client from "prom-client"

const app = express();
const port = process.env.PORT ?? 8000;
const red = '\x1b[31m';
const reset = '\x1b[0m';

const collectionDefaultMetrixs = client.collectDefaultMetrics;

collectionDefaultMetrixs({ register: client.register });

app.get("/", (req, res, next) => {
    res.status(200).json({
        message: "It's working . . . ",
    })
})

app.get("/slow", async (req, res, next) => {
    try {

        setTimeout(() => {
            return res.status(200).json({
                message: "hey buddy"
            })
        }, 2000);

    } catch (error) {
        next(error);
    }
})

app.get('/metrics', async(req, res, next)=> {
    try {
        
        res.header("Content-Type", client.register.contentType);
        const metrics = await client.register.metrics();

        res.send(metrics);

    } catch (error) {
        next(error);
    }
})

app.listen(port, () => console.log(`we are running at \n${red}http://localhost:${port}`));
