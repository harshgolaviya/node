const express = require('express')
const mongodb = require('mongodb')
getdata = express.Router()

const MongoClient = mongodb.MongoClient
const url = "mongodb+srv://admin:admin@cluster0.qp5wvkf.mongodb.net/?retryWrites=true&w=majority"

getdata.get('/', (req, res) => {
    MongoClient.connect(url, (err, connection) => {
        if (err) throw err
        else {
            const db = connection.db('jayshreeram')
            db.collection('hanuman').find().toArray((err, arr) => {
                res.send(arr)
                console.log(arr);
            })
        }
    })
})


module.exports=getdata