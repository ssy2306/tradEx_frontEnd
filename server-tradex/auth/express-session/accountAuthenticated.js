const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const jwt = require('jsonwebtoken');

const accountAuthenticated = async (req, res, next) => {
    try {
        const authToken = req.session.authToken;
        const decodedToken = jwt.verify(authToken, 'shahil');
        const userEmail = decodedToken.userEmail;
        const userPassword = decodedToken.userPassword;
        console.log(userEmail, userPassword);
        const check2 = await prisma.lu_user.findFirst({ where:{
            email: userEmail,
            password: userPassword
        }});

      if (req.session.user && check2) {
        // console.log("account exists")
        next();
      } else {
        res
          .status(401)
          .send({ success: false, message: "ACCOUNT NOT AUTHENTICATED" });
      }
    } catch (error) {
        console.log(error);
      res
        .status(500)
        .send({
          success: false,
          message: "ACCOUNT NOT AUTHENTICATED",
          error: error,
        });
    }
  };
  //checks whether the session contains account or not.
  //if present , continues to go to the next middleware
  module.exports = accountAuthenticated;