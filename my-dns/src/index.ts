import express, { Request, Response } from 'express';
import dgram from "node:dgram";

const server = dgram.createSocket("udp4");

server.on('message', (msg, rinfo)=> {
    
})


const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});