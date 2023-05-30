function Token(req,res,next) { 
    console.log("Created Token");
    const TOKEN = "123"
    req.token = true;
    next()
 }
 module.exports=Token
 