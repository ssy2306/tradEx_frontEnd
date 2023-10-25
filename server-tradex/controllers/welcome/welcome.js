const welcome = async (req, res) => {
    res
    .status(200)
    .send({
        success: true,
        message: "API Called Successfully"
    })
}

module.exports = welcome;