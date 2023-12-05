const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postComments = async (req, res) => {
    try {
        const { userId, comment, upvote, downvote, coinId } = req.body;

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
