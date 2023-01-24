const express=require('express')
const Category = require("../Models/category");
category=express.Router()


category.use(express.json())
category.use(express.urlencoded())


category.get('/',(req,res)=>{
    Category.find({},(err,result)=>{
        if(err) throw err
        else{
            res.send(result)
        }
    })
})

category.get('/:id',async(req,res)=>{
    const cate=await Category.findById(req.params.id)
    if(!cate){
        res
            .status(500)
            .json({msg:"The category id not found.."})
    }
    else{
        res.send(cate)
    } 
})


category.post('/',(req,res)=>{
    const result=Category.insertMany(req.body,(err,resul)=>{
        if(err) throw err
        else
        {   
            res.json({msg:"Insert data successfull"})
            console.log(resul);
        }
    })
})

category.post("/id",async(req,res)=>{
    let cate=new Category({
        id:req.body.id,
        name:req.body.name,
        icon:req.body.icon,
        color:req.body.color,
        image:req.body.image,
    })
    const cate_insert=await cate.save()
    if(!cate_insert) return res.status(500).send("Data not sended.")
    res.send(cate_insert)

})


// category.put('/',(req,res)=>{
//       Category.updateOne(
//         {name:req.body.name},{$set:{icon:req.body.icon}},
//         (err,result)=>{
//             if(err) throw err
//             else{
//                 res.send(result)
//                 console.log(result);
//             }
//         })
// })


category.put('/:id',async(req,res)=>{
    const cate=await Category.findByIdAndUpdate(
        req.params.id,{
            name:req.body.name,
            icon:req.body.icon,
            color:req.body.color,
        })
        if(!cate) return res.status(400).send("category id  not found")
        res.send(cate)
})



// category.delete('/',(req,res)=>{
//     Category.deleteOne({name:req.body.name},
//         (err,result)=>{
//             if(err) throw err
//             else{
//                 res.send(result)
//             }
//         })
// })

category.delete('/:id',async(req,res)=>{
    const cate=await Category.findByIdAndRemove(req.params.id)
    if(!cate){
        res.status(500).send("Not founded")
    }
    else{
        res.status(200).send("Successfull")
    }
})

//Promise
// category.delete('/:id',async(req,res)=>{
//     const cate=await Category.findByIdAndRemove(req.params.id)
//     .then((cate)=>{
//         if(cate){
//             return res
//                 .status(200)
//                 .json({Success:"Successfull"})
//         }else{
//             return res
//                 .status(404)
//                 .json({Fail:"fail"})
//         }
//     })
//     .catch((err)=>{
//         return res.status(500).json({Fail:"Error"})
//     })
// })

module.exports=category