const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const postFeedback = async (req, res) => {
    try {
        const {
            usabilityRating,
            statementRatings,
            overallSatisfactionRating,
            likesDislikes,
            otherComments,
        } = req.body;

        // Use Prisma Client to store the feedback in the database
        const newFeedback = await prisma.feedback_responses.create({
            data: {
                usability_rating: usabilityRating,
                statement_ratings_1: statementRatings[0],
                statement_ratings_2: statementRatings[1],
                statement_ratings_3: statementRatings[2],
                statement_ratings_4: statementRatings[3],
                statement_ratings_5: statementRatings[4],
                overall_satisfaction_rating: overallSatisfactionRating,
                likes_dislikes: likesDislikes,
                other_comments: otherComments,
            },
        });

        res.status(200).send({
            success: true,
            message: "Feedback submitted successfully",
            feedback: newFeedback,
        });
    } catch (error) {
        console.error("Error submitting feedback:", error);
        res.status(500).send({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

module.exports = postFeedback;
