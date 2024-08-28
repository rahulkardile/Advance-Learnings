import { kafka } from "./clinet.js";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})



async function init() {
    const producer = kafka.producer();
    
    await producer.connect();
    console.log("Your in producer!");
    
    rl.setPrompt('> ');
    rl.prompt();

    rl.on('line', async (line)=> {
        const [riderName, location] = line.split(' ');

        await producer.send({
            topic: 'rider-updates',
            messages: [{
                key: 'location-update', value: JSON.stringify({
                    partition: location.toLocaleLowerCase() === "north" ? 0 : 1,
                    name: riderName,
                    loc: location,
                })
            }]
        })

    } ).on("close", async ()=>{
        await producer.disconnect();
    })    
}

init();