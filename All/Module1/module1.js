const  express=require('express')
const mid = require('../Mid/mid')
module1=express.Router()

module1.get('/',[mid],(req,res)=>{

   res.json({module1:"Successful Jwt-simple..."})

})

module.exports=module1