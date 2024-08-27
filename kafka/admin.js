import { kafka } from "./client.js";

async function init(params) {
    const admin = kafka.admin();
    console.log('Admin is connecting . . . ');
    admin.connect();
    console.log('Admin is connection is success . . . ');

    await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2,
        }]
    })

    console.log("Topic created success!");
    await admin.disconnect();
    console.log("Disconnecting Admin!");
    
}

init();