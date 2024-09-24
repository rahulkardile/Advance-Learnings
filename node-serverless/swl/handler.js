const serverless = require("serverless-http");
const express = require("express");
const app = express();
require("dotenv").config();

const MONGO_URL = process.env.MONGO_URL;

try {
  mongoose.connect(MONGO_URL)
    .then(console.log("Database is connected"))
} catch (error) {
  console.log('Database is not connected');
}


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root2!",
  });
});

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

exports.handler = serverless(app);
