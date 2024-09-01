import express from "express";
import axios from "axios";
import { redisClient } from "./client.js";

const app = express();

app.get("/", async (req, res) => {
    try {

        const cacheValue = await redisClient.get("todos");

        if(cacheValue) return res.json(JSON.parse(cacheValue));

        const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos");
        await redisClient.set("todos", JSON.stringify(data));
        await redisClient.expire("todos", 60);

        return res.json(data);
    
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false
        })
    }
})

app.listen(3000, ()=>console.log('server is running . . . '));