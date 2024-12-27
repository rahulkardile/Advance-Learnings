import http from 'http';
import setCORSHeaders from './utils/cors.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = http.createServer(async (req, res) => {

    setCORSHeaders(res);

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    if (req.url === "/" && req.method === "GET") {
        const filePath = path.join(__dirname, 'index.html');

        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end("Internal Server Error: Unable to read HTML file.");
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    }

    else if (req.url === "/user" && req.method === "POST") {
        let body = '';

        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const userDetails = JSON.parse(body);
            const { username, password } = userDetails;

            if (username === "admin" && password === "admin") {
                res.writeHead(200);
                res.end(JSON.stringify({ message: "Login success!" }));
                return;
            } else {
                res.writeHead(400);
                res.end(JSON.stringify({ message: "Username and Password verification failed!" }));
                return;
            }
        });
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found!" }));
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000 \nhttp://localhost:3000");
});
