import { clinet } from "./client.js";

async function init() {
    const result = await clinet.get("name:3");
    console.log({result});
}
init();