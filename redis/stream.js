import { redisClient } from "./client.js";

async function init() {

    await redisClient.xadd("race:france", '*', 
        'rider', 'Castilla',
        'speed', '30.2',
        'position', '1',
        'location_id', '1'
    );

    await redisClient.xadd("race:france", '*', 
        'rider', 'raju sharma',
        'speed', '32.2',
        'position', '3',
        'location_id', '1'
    );

    await redisClient.xadd("race:france", '*', 
        'rider', 'nue',
        'speed', '37.2',
        'position', '2',
        'location_id', '1'
    );

    await redisClient.xadd("race:france", '*', 
        'rider', 'jain',
        'speed', '21.2',
        'position', '4',
        'location_id', '1'
    );

    console.log(await redisClient.xrange('race:france', '0', "+"));

    // const res4 = await client.xRange('race:france', '1691765278160-0', '+', {COUNT: 2});
    // console.log(res4); 

}

init();