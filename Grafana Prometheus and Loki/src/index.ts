import express from "express";

const app = express();
const port = process.env.PORT ?? 8000;

app.get("/", (req, res, next)=>{
    res.status(200).json({
        message: "It's working . . . ",
    })
})

app.get("/slow", async(req, res, next)=>{
    try {
        


    } catch (error) {
        next(error);
    }
})

app.listen(port, ()=> console.log(`we are running at \nhttp://localhost:${port}`));
