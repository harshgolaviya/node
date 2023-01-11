const express = require('express')
const jwtsimple = require("jwt-simple")
const jwttoken=require('jsonwebtoken')
const tokenobj = require('../Token/token')
login = express.Router()



login.get('/', (req, res) => {

     const uname=req.body.uname
     const upwd=req.body.upwd
     if(uname=='admin'&&upwd=='admin123')
     {
        const token=jwtsimple.encode({uname:uname,upwd:upwd},'skill')
        tokenobj.token=token
        const token1=jwttoken.sign({uname:uname,upwd:upwd},'skill')
        tokenobj.token1=token1
        res.json({login:"SuccessFull",jwtsimple:token,jwttoken:token1})
     }
     else{
        res.json({login:"Fail"})
     }
})


module.exports = login