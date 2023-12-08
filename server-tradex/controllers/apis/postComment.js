const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postComments = async (req, res) => {
    try {
        const {  comment, upvote, downvote, id } = req.body;
        const coinId = req.body.id;
        // const userId = req.session.user.email;
        const userId = "abc@gmail.com";
        // Use Prisma Client to create a new comment
        const newComment = await prisma.lu_comment.create({
            data: {
                userid: userId,
                comment: comment,
                coinid: coinId,
            },
        });

        res.status(200).send({
            success: true,
            message: "Comment posted successfully",
            comment: newComment,
        });
    } catch (error) {
        console.error("Error posting comment:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = postComments;
