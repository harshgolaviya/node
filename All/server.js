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

const getdata=require('./Mongod_crud/getdata')
app.use('/getdata',getdata)

const postdata=require('./Mongod_crud/postdata')
app.use('/postdata',postdata)

const putdata=require('./Mongod_crud/putdata')
app.use('/putdata',putdata)

const deletedata=require('./Mongod_crud/deletedata')
app.use('/deletedata',deletedata)

.listen(port,()=>{
    console.log('Server listening...');
})