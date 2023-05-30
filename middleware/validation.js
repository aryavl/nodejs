function Validation(req,res,next){
    if(req.token){
        console.log("Token Approved");
        next()
        return
    }
    console.log("No aauth");
    res.send("<h1>No auth</h1>")
}
module.exports=Validation
