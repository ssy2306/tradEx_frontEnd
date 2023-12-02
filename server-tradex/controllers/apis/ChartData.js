const axios = require('axios');

const ChartData = async (req, res) => {
    try {
        const id = req.body.id; 
        const chartResponse = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1`);
       
        if (!chartResponse.ok) {
            throw new Error(`Chart request failed with status ${chartResponse.status}`);
        }
        const chartData = chartResponse.json();
        const labels = chartData.prices.map((data) => new Date(data[0]).toLocaleTimeString());
        const dataValues = chartData.prices.map((data) => data[1]);
        console.log(chartData);
        res
            .status(200)
            .send({ success: true, 
                    message: chartResponse,
                    labels: labels,
                    dataValues: dataValues
                });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            success: false,
            message: "Internal error",
            data: error,
        });
    }
};

module.exports = ChartData;
