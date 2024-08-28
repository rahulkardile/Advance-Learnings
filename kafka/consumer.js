import { kafka } from "./clinet.js";

const group = process.argv[2];

async function init() {
    const consumer = kafka.consumer({ groupId: 'user-1' });
    await consumer.connect();

    await consumer.subscribe({
        topics: ["rider-updates"],
        fromBeginning: true
    });

    await consumer.run({
        eachMessage: async ({topic, partition, message, heartbeat, pause})=> {
            console.log(`Group: ${group} \n[${topic}]: PART:${partition} \n${message.value.toString()}`);
            
        }
    })

}

init();