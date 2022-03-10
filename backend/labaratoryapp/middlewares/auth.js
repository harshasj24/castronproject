const jwt=require("jsonwebtoken")
SCERET_KEY = "345Rtg#$";


const authorizedAdmin= async (req,res,next)=>{

       
    if (req.headers['authorization']) {
    var token= await req.headers.authorization.split(" ")[1]  
 
    const payload= await jwt.verify(token,SCERET_KEY)

    if (payload.role==="Admin") {
        next()
        
    }else{
        res.json({
            error:true,
            message:"Authorization denied",
            data:null
        })
    }

    }else{
        res.json({
            error:true,
            message:"Authorization denied",
            data:null

        })
    }

}

const userAuthorization=async (req,res,next)=>{
    const id=req.params.email
    if (req.headers["authorization"]) {
       
        const token= await req.headers.authorization.split(" ")[1]
        const payload= await jwt.verify(token,SCERET_KEY)
        if (payload.role==="user"&& payload.email===id) {
            next()
            
        }else{
            res.json({
                error:true,
                message:"Authorization denied",
                data:null
            })

        }
    

    }else{
        res.json({
            error:true,
            message:"Authorization denied",
            data:null
        })
    }
}

module.exports={
    authorizedAdmin,
    userAuthorization
}