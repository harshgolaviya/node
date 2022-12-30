const express=require('express')
const app=express()
const port=5010

app.get("/login",(req,res)=>{
    res.sendFile(__dirname +"/index.html")
    console.log("Get login..");
})

app.post("/login1",(req,res)=>{
    const request=req.body;
    console.log('Data : ',request);
})

.listen(port,()=>{
    console.log(`server listening Port ${port}`);
})