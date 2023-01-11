const express=require('express')
const app=express()
const port=5010

app.use(express.json())
app.use(express.urlencoded())


app.get('/',(req,res)=>{
    res.json({msg:"Inside default main..."})
})


const login=require('./Login/login')
app.use('/login',login)

const module1=require('./Module1/module1')
app.use('/module1',module1)

const module2=require('./Module2/module2')
app.use('/module2',module2)

const getdata=require('./Getdata/getdata')
app.use('/getdata',getdata)

.listen(port,()=>{
    console.log('Server listening...');
})