const express = require("express")

const app = express();
const path = require("path")
const Token = require("./middleware/token")
const Validation = require("./middleware/validation")
// app.get("/",(req,res)=>{
//     // res.send("<h1>Home</h1>")
//     res.json("<h1>Home</h1>")
// })
// app.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname,"views","index.html"))
// })
// app.get("/contact",(req,res)=>{
//     res.send("<h1>Contact</h1>")
// })
// app.get("/profile",Token,(req,res,next)=>{
//     console.log("User logged");
//     res.send("<h1>Success</h1>")
//     next()
// },(req,res)=>{
//     console.log("last");
// })
// // middleware for token creation
// function Token(req,res,next){
//     console.log("Creating Token");
//     next()
// }
app.use(DateGenerate)

const middleware = [Token,Validation]
app.get("/profile",middleware,(req,res)=>{
    console.log("User logged");
    res.send("<h1>Success</h1>")
})
app.get("/",(req,res)=>{
    console.log("Home");
    res.send("<h1>Home</h1>")
})
function DateGenerate(req,res,next) {
console.log(new Date());
next()
  }
// using middleware 
// app.use(express.static("views"))
app.get("*",(req,res)=>{
    res.status(404).send("<h1>404 Page not found</h1>")
})

const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server running on ${PORT}`);
})
