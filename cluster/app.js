import express from 'express'
const app = express();

app.get("/", (req, res)=> {
    res.send("Hello From server " + process.pid);
})

let i = 0;
while(true){
    i++;
    console.log(i);
}

app.listen(3300, ()=>console.log("server is running at 3300 . . . "))