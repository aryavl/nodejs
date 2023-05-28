const http = require("http")
const fs = require("fs")
const path = require("path")

// http.createServer((req,res)=>{
//     res.write("This is nodejs")
//     console.log(req.url);
//     console.log("test");
//     res.end()
// }).listen(3001,()=>console.log("Server is running"))

const server=http.createServer((req,res)=>{
    // res.write("<h1>This is nodejs</h1>")
    // console.log(req.url);
    // console.log("test");
    if(req.url === "/"){
        fs.readFile(path.join(__dirname,"views","index.html"),"utf-8",(err,data)=>{
            if(err) throw err;
            
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)
        })
        
    }
    if(req.url === "/contact"){
        fs.readFile(path.join(__dirname,"views","contact.html"),"utf-8",(err,data)=>{
            if(err) throw err;
            
            res.writeHead(200,{"Content-Type":"text/html"})
            res.end(data)
        })

    }
       
})
const PORT = process.env.PORT || 3001
server.listen(PORT,()=>console.log(`Server is running on ${PORT}`))