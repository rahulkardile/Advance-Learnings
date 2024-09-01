import { redisClient } from "./client.js";

async function init() {
    // await redisClient.lpush("msg:4", 1 );
    // await redisClient.lpush("msg:4", 2 );
    // await redisClient.lpush("msg:4", 3 );
    // await redisClient.lpush("msg:4", 4 );
    
    // await redisClient.lpush("msg:4", 11, 22, 33, 44, 55);

    // const result = await redisClient.rpop("msg:4");

    // in blocking mode
    // const result = await redisClient.blpop("msg:4", 40);
    // console.log(result);

    // to get all 
    // console.log(await redisClient.lrange("msg:shantanu messages", 0, -1));
    
    console.log(await redisClient.lrange("msg:4",0, -1));
    
}

init();