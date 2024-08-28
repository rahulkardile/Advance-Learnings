import { kafka } from "./clinet.js";

async function init() {
    const admin = kafka.admin();

    console.log('admin connecting!');
    admin.connect();
    console.log('admin connection success!');
    
   await admin.createTopics({
        topics: [{
            topic: 'rider-updates',
            numPartitions: 2
        }], 
    })

    console.log('topic created success!');
    await admin.disconnect();
    console.log('admin disconnected success!');

};

init();