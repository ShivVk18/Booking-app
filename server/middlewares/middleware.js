const jwt = require('jsonwebtoken')

require('dotenv').config()


exports.auth = (req,res,next)=>{
   try {
    
       //extract jwt token
       //Pending-: Other ways to fetch token
       // const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer","")
       
       console.log("Body Token:" , req.body.token)
       console.log("Cookies Token:" , req.cookies.token)
       console.log("Header Token:" , req.header("Authorization"))



       const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer","")

       if(!token){
           return res.status(401).json({
               success:false,
               message :"Token missing"
           })
       }
       
       //verify the token
       try{
           const payload = jwt.verify(token, process.env.JWT_SECRET)
           console.log(payload);
            
           //why this
           req.user = payload
       }catch(error){
           res.status(401).json({
                success:false,
                message:"Token is invalid"
           })
       }
    
       next()
   } catch (error) {
       return res.status(401).json({
           success:false,
           message:"Something went wrong,while verifying the token"
       })
   }
}