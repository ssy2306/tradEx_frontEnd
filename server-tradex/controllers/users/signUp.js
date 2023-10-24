const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt")

const signUp = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phone_number = req.body.phone_number;
    const plaintextPassword = password;
    try {

        if (!email || !password || !name) {
            res.status(401).send({
                success: false,
                message: "Enter Required Fields"
            });
            return;
        }

        const user = await prisma.lu_user.findFirst({
            where: {
                email: email,
                password: password
            },
        });

        if (user) {
            res.status(401).send({
                success: false,
                message: "User Exits, Try Logging In",
                data: req.body,

            });
            return;
        } else if (!(await prisma.lu_user.findFirst({ where: { email: email } }))) {

            var value = password;
            const salt = await bcrypt.genSalt(10);
            value = await bcrypt.hash(value, salt);
            console.log(value);
            const created_user = await prisma.lu_user.create({
                data: {
                    name: name,
                    email: email,
                    password: value,
                    phone_number: phone_number
                }
            });
            // const user_id = await prisma.lu_user.findFirst({where:{name: name, email: email, password: value}, select: {
            //     id: true
            // }});
           
            // for (let i = 1; i < 3; i++){
            //     await prisma.tests.create({data:{ fk_user_id:user_id.id, test_id: i}});
            // }

            req.session.user = created_user;
            res.status(200).send({
                success: true,
                message: "Signed Up successfully"
            });
        }
        else{
            res.status(401).send({
                success: false,
                message: "User Email Exists, Try Logging In",
                data: req.body.email,

            });
        }

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal error ",
            data: error,
        });
    } finally {
        await prisma.$disconnect();
    }
};

module.exports = signUp;
