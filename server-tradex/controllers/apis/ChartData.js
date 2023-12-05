const axios = require('axios');

const ChartData = async (req, res) => {
    try {
        const id = req.body.id;
        const chartResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });


        const labels = chartResponse.data.prices.map((data) => new Date(data[0]).toLocaleTimeString());
        const tlabels = chartResponse.data.prices.map((data) => new Date(data[0]));
        console.log(tlabels);
        const dataValues = chartResponse.data.prices.map((data) => data[1]);
        
        res.status(200).send({
            success: true,
            labels: labels,
            dataValues: dataValues,
            tlabels: tlabels,
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Internal error",
            data: error.message, // Send only the error message, not the entire error object
        });
    }
};

module.exports = ChartData;
