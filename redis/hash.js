import { redisClient } from "./client.js";

async function init() {
    const data = await redisClient.hset(
        'bike:2',
        {
            model: 'pulser 220 plus',
            price: 140000,
            region: 'south east asia',
            color: 'blue'
        }
    )
    
    await redisClient.expire("bike:2", 10);

    console.log(data);

    const res2 = await redisClient.hget('bike:2', 'model')
    console.log(res2);

    const res3 = await redisClient.hgetall("bike:2");
    console.log(res3)

}

init();