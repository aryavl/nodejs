// const amount = 10;

// if(amount < 6){
//     console.log("Small Number");
// }else{
//     console.log("large number");
// }

// console.log(`hey Its me arya and this is my first node js program`);



// GLOBAL - NO WINDOW

// __dirname - path to current directory
// __filename - file name
// require - function to use modules (common JS)
// module - info about current module (file)
// process - info about env where the program is being executed
// console.log(__dirname);
// console.log(__filename);
// setInterval(()=>{
// console.log("hello world");
// },1000)

// Modules
// Every file in js is a module by default
// const arya= "arya"
// const sayHi=(name)=>{
//     console.log(`hello there ${name}`);
// }
// sayHi(arya)
// var http = require("http")
// http.createServer(function(req,res){
//     res.write("Hello ")
//     res.end()
// }).listen(8080)

// const arr = ["a","b","c"]
// console.log([...arr,"d"]);

// const newFunc = () =>10;

// console.log(newFunc());

// const interval = setInterval(()=>{
// console.log("hellooo");
// },1000)
// setTimeout(()=>{
//     clearInterval(interval)
// // console.log("hello");
// },5000)
// global.console.log("hello")

// const path = require("path");
// console.log(__filename);
// console.log(path.basename(__filename)); //app.js
// console.log(path.extname(__filename)); //.js
// console.log(path.dirname(__filename)); // C:\Week 7
// console.log(path.parse(__filename)); 
// // {
// //     root: 'C:\\',
// //     dir: 'C:\\Week 7',
// //     base: 'app.js',
// //     ext: '.js',
// //     name: 'app'
// //   }

// console.log(path.parse(__filename).name); //app
// // to join path one to another path
// console.log(path.join(__dirname,"api","app.js")); //C:\Week 7\api\app.js
const fs = require("fs")
const path = require("path")
// console.log(fs);
// fs.mkdir(path.join(__dirname,"/api1/api3/index.html"),{},(err)=>{
//     if(err) throw err;
// })
// if dont put the recursion true it will only delete one folder 
// fs.rmdir(path.join(__dirname,"/api1/api3"),{recursive:true},(err)=>{
//     if(err) throw err;
// })

// to create a file inside a folder and write the content of that file
const arr=["arya","lekshmi"]
let arrItem=""
for(let i =0; i<arr.length;i++){
    arrItem+=arr[i]+" "
}


fs.writeFile(path.join(__dirname,"/api","api1.txt"),`Names are ${arrItem}`,(err)=>{
if(err) throw err
})
fs.appendFile(path.join(__dirname,"/api","api1.txt"),`\nHello all, append is used to append data to an existing file`,(err)=>{if(err)throw err})
fs.readFile(path.join(__dirname,"/api","api1.txt"),"utf-8",(err,data)=>{if(err)throw err
console.log(data);
})




