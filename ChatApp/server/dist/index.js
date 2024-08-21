"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const socket_io_1 = require("socket.io");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
const port = 3300;
const server = http_1.default.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: "http://localhost:5173",
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    console.log(`user is connected : ${socket.id}`);
    socket.on("send_message", (data) => {
        socket.broadcast.emit("receive_message", data);
    });
});
app.get('/', (req, res) => {
    res.send('Hello, TypeScript with Express!');
});
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
