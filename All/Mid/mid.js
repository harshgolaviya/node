const tokenobj = require("../Token/token");


const mid=(req,res,next)=>{
    const header=req.headers.token
     if(header==tokenobj.token)
     {
        next()
     }   
     else{
        res.json({module1:"Fail"})
     }
}

module.exports=mid