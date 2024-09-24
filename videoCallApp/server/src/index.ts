import express, { Express } from "express"
import dotenv from "dotenv";

dotenv.config();
const PORT = process.env.PORT ?? 3300;

const app: Express = express();

app.get("/", (req, res, next) => {
    try {

        res.send("Okk");

    } catch (error) {
        next(error);
    }
})

app.listen(PORT, () => console.log(`server is running at ${PORT}\nhttp://localhost:${PORT}`));