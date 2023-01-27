const express=require('express')
const mongodb = require('mongodb')
deletedata=express.Router()

const MongoClient=mongodb.MongoClient
const url="mongodb+srv://admin:admin@cluster0.qp5wvkf.mongodb.net/?retryWrites=true&w=majority"


deletedata.delete('/',(req,res)=>{
    MongoClient.connect(url,(err,connection)=>{
        if (err) throw err
        else
        {
            const db=connection.db('jayshreeram')
            db.collection('hanuman').deleteOne(
                {title:req.body.title},(err,result)=>{
                    if (err) throw err
                    else{
                        res.send({Delete:"Successfull"})
                        console.log(result);
                    }
                }
            )
        }
    })
})


module.exports=deletedata