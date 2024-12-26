import http from 'http';
import setCORSHeaders from './utils/cors.js';

const app = http.createServer(async (req, res) => {

    setCORSHeaders(res);

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        return res.end();
    }

    if (req.url === "/" && req.method === "GET") {
        res.end(JSON.stringify({ message: "hey how are you buddy!" }));
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
    } 
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: "Route not found!" }));
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000 \nhttp://localhost:3000");
});
