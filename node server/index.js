import * as http from 'http';

const app = http.createServer(async (req, res) => {

    if (req.url === "/" && req.method === "GET") {
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: "hey how are you buddy!" }));
    } 
    else if(req.url === "/user" && req.method === "POST"){
        let body = '';

        // collect all data 
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on("end", ()=>{
            const userDetails = JSON.parse(body);
            console.log(userDetails);

            res.writeHead(200);
            res.end(JSON.stringify({ message: "Login success!" }));
            return;

        })

    }

});

app.listen(3000, () => {
    console.log("Server is running on port 3000 \nhttp://localhost:3000");
});
