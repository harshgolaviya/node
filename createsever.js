const http=require('http');
const sever=http
    .createServer((req,res)=>{
        res.write("kem bhai aa baju");
        console.log('connected')
        res.end()
    })
    .listen(5010,()=>{
        console.log('thay gyu ho bhai')
    })