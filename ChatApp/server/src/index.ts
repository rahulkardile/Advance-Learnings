import express, { Request, Response } from 'express';
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

const app = express();
app.use(cors());

const port = 3300;
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) => {
    console.log(`user is connected : ${socket.id}`);

    socket.on("send_message", (data)=> {
        socket.broadcast.emit("receive_message", data);
    })
})

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});