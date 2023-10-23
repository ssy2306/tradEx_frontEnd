const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { generateToken } = require('../../auth/jsonwebtoken/jwt');
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  try {
    if (!email || !password) {
      res.status(401).send({
        success: false,
        message: "Enter Valid Inputs"
      });
      return;
    }

    const user = await prisma.lu_user.findFirst({
      where: {
        email: email
      },
    });

    if (!user) {
      res.status(401).send({
        success: false,
        message: "CREDENTIALS DON'T EXIST",
        data: req.body,
      });
      return;
    } else {
      var hashPassword = await prisma.lu_user.findFirst({
        where: {
          email: email
        },
        select: {
          password: true
        }
      });

      const isPasswordValid = await bcrypt.compare(password, hashPassword.password);

      if (isPasswordValid) {
        const token = generateToken(user);
        res.cookie(token);
        req.session.authToken = token;
        req.session.user = user;
        console.log(req.session.user);
        console.log(token);
        res.status(200).send({
          success: true,
          message: "hewwo",
        });
      } else {
        res.status(401).send({
          success: false,
          message: "Invalid Password",
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Internal error",
      data: error,
    });
  } finally {
    await prisma.$disconnect();
  }
};

module.exports = loginUser;
