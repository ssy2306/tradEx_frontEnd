const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getComments = async (req, res) => {
    try {
        const coinId = req.body.id;
        const comments = await prisma.lu_comment.findMany({
            where: {
                coinid: coinId,
            },
            orderBy: {
                datecreated: 'desc',
            },
        });
console.log("called");
        res.status(200).send({
            success: true,
            message: "Comments retrieved successfully",
            comments: comments,
        });
    } catch (error) {
        console.error("Error getting comments:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = getComments;
