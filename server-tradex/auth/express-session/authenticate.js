const isAuthenticated= async(req, res, next)=> {
    // console.log(req.session.user)
    try{
    if (req.session.user)
    {
    // console.log("user exists")
    next()
    }
    else{
        res.status(200).send({ success: false, message: "ACCOUNT NOT AUTHENTICATED" })
    }
}
catch(error)
{
    res.status(200).send({success:false,message:"NOT AUTHENTICATED"})
}
}
//checks whether the session contains user or not. If not, then initiates the login process again
//if present , continues to go to the next middleware
module.exports = isAuthenticated