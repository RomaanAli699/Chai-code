require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT;

app.get("/",(req,res)=>{
    res.send("hello world");
})

app.get("/twitter",(req,res)=>{
    res.send("twitter");
})

app.get("/login",(req,res)=>{
    res.send(`<h1>login-at romania</h1>`);
})

app.get("/career",(req,res)=>{
    res.send(`<h1>From Tier to Product Based</h1>`);
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on ${port}`);
})

