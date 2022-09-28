const { expressjwt: expressJwt } = require('express-jwt');
const { get_user_by_id } = require("./profile.service");

  const requireSignin=expressJwt({secret:process.env.JWT_SECRET,algorithms:['HS256']})
exports.reqSignin=(req,res,next)=>{

    requireSignin(req, res, function (err) {
        if(err){
console.log(err);
        
        return res.status(401).json({ "Error": "User not found"});}
        // Everything went fine. 
        next()
    })
    
}

