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


// Include os module and create its object
var os = require('os');
  
// // return the cpu architecture
console.log("CPU architecture: " , os.cpus());
  
// // It returns the amount of free system memory in bytes
// console.log("Free memory: " + os.freemem());
  
// // It return total amount of system memory in bytes
// console.log("Total memory: " + os.totalmem());
  
// // It returns the list of network interfaces
// console.log('List of network Interfaces: ' + os.networkInterfaces());
  
// // It returns the operating systems default directory for temp files.
// console.log('OS default directory for temp files : ' + os.tmpdir ());



// arch()	     Returns the operating system CPU architecture
// constants	Returns an object containing the operating system's constants for process signals, error cotes etc.
// cpus()	Returns an array containing information about the computer's CPUs
// endianness()	Returns the endianness of the CPU
// EOL	Returns the end-of-line marker for the current operating system
// freemem()	Returns the number of free memory of the system
// hostname()	Returns the hostname of the operating system
// loadavg()	Returns an array containing the load averages, (1, 5, and 15 minutes)
// networkInterfaces()	Returns the network interfaces that has a network address
// platform()	Returns information about the operating system's platform
// release()	Returns information about the operating system's release
// tmpdir()	Returns the operating system's default directory for temporary files
// totalmem()	Returns the number of total memory of the system
// type()	Returns the name of the operating system
// uptime()	Returns the uptime of the operating system, in seconds
// userInfo()