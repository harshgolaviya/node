const { Console, log } = require('console')
const fp=require('fs')

// read Asynchronously
// fp.readFile('file.txt','utf-8',(err,data)=>{
//     if(err) 
//         console.log(err)
//     else 
//         console.log(data)
// })


// read  synchronously
// data=fp.readFileSync("file.txt",'utf8')
// console.log(data);


// write  Asynchronously
// dt='harsh golaviya1212'
// fp.writeFile('js11.txt',dt,'utf-8',(err)=>{
//     if(err) 
//         console.log(err);
//     else  
//          console.log('successfully...');
// })


// write  synchronously
// dt='harsh golaviya1221212'
// data=fp.writeFileSync('file.txt',dt,'utf-8')



// rename Asynchronously 
// fp.rename('file22.txt','file.txt',(err)=>{
//     if(err)
//         console.log(err);
//     else
//         console.log('successfully...');
// })


// rename synchronously 
// fp.renameSync('file.sql','file33.txt')


// unlink(delete file) Asynchronously 
// fp.unlink('js11.txt',(err)=>{
//     if(err)
//        console.log(err);
//     else 
//        console.log('successfully...');
// })


// unlink(delete file) synchronously 
// fp.unlinkSync('js11.txt')


// fp.stat('file.txt',(err,data)=>{
//     if(err)
//        console.log(err);
//     else 
//        console.log(data);
// })


// copy_file_Asynchronously:-
// fp.copyFile('file.txt','file1.txt',(err)=>{
//     if(err) console.log(err);
//     else fp.readFileSync('file.txt','utf-8')
// })


// copy_file_synchronously:-
// fp.copyFileSync('file.txt','file1.txt')



// copy file:-
// fp.readFile('file.txt','utf-8',(err,data)=>{
//     if(err)    
//         console.log(err);
//     else
//          fp.writeFileSync('file12.txt',data,'utf-8')
// })
