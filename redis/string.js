import { redisClient } from "./client.js";

async function init() {
    const result = await redisClient.get("name:3");
    console.log(result);
    
}

init();