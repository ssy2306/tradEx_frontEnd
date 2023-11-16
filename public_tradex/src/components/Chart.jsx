import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import TopVolumesTable from './TopVolumesTable';
import { Line } from 'react-chartjs-2';
import CryptoChartComponent from './CryptoChartComponent';
import Loader from './Loader.jsx'
import { bgcolor } from '@mui/system';

const Chart = () => {
    // Use the `useParams` hook to access the `id` parameter from the URL
    const { id } = useParams();
    const [chartData, setChartData] = useState(null);
    const [cryptoData, setCryptoData] = useState(null);
    const [error, setError] = useState(null);
    const chartRef = useRef(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchCryptoData = async () => {
            try {
                const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
                const data = await response.json();
                setCryptoData(data);
                // console.log(data);

                const chartResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=inr&days=1`);
                if (!chartResponse.ok) {
                    throw new Error(`Chart request failed with status ${chartResponse.status}`);
                }
                const chartData = await chartResponse.json();
                setChartData(chartData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchCryptoData();
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy();
            }
        };
    }, [id]);

    const getTopVolumes = () => {
        if (cryptoData && cryptoData.tickers) {
            return cryptoData.tickers.sort((a, b) => b.volume - a.volume)
                .slice(0, 5);
        }
        return [];
    };

    const topVolumes = getTopVolumes();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    if (!cryptoData || !chartData) {
        return <div>No data available.</div>;
    }
    const descriptionHtml = { __html: cryptoData.description.en };
    const isPositive = cryptoData.market_data.price_change_percentage_24h > 0;
    const price_change_percentage_24h = isPositive ? `+ ${cryptoData.market_data.price_change_percentage_24h}%` : `${cryptoData.market_data.price_change_percentage_24h}%`;
    const bgColor = isPositive ? '#31C48D': '#FD1F64';
    return (
        <Box sx={{
            marginLeft: '249px',
            paddingTop: '2rem',
            paddingLeft: '2rem',
            paddingBottom: '2rem',
            background: "black",
            textDecoration: 'none',
            height: '100%'
        }}>
            <Box sx={{
                
                bgcolor: '#ffffff',
                padding: 1,
                width: '100%',
                maxWidth: 100,
                borderRadius: 2,
                textAlign: 'center',
                fontSize: '1rem',
                color: 'black'
                
            }} >
                Rank #{cryptoData.coingecko_rank}
            </Box>

            <Box sx={{
                display: 'block',
                padding: '1rem',
                paddingLeft: 0,
                alignItems: 'center'
            }}>
                <p style={{ fontSize: '2rem', margin: 0,  fontWeight: 700  }}>
                {cryptoData.market_data.current_price.inr}   INR
                </p>
                <p style={{ fontSize: '1rem', margin: 0, fontWeight: 300 }}> {price_change_percentage_24h}, Last updated : {new Date(cryptoData.last_updated).toLocaleTimeString()}</p><br />
                
                <Box sx={{ display: 'flex' }}>
                    <img src={cryptoData.image.large} style={{ width: '60px', height: '60px', marginRight: 15, }} />
                    <p style={{ fontSize: '2rem', margin: 0, }}><b>{cryptoData.name} {`(${cryptoData.symbol})`} </b></p>

                </Box>
                <Box>
                    <Typography sx={{fontWeight: 100, fontSize: 15, marginTop: 2}}>Price Chart (Last 24 Hours)</Typography>
                    <CryptoChartComponent cryptoChartData={chartData} chartRef={chartRef} bg={bgColor}/>
                </Box>
            </Box>
            <b style={{ fontSize: '1.2rem' }}>Profile</b>
            <Typography variant="body1" dangerouslySetInnerHTML={descriptionHtml} />
            <Typography variant="h6">Number of Users</Typography>
            <Typography variant="body1">{cryptoData.watchlist_portfolio_users}K</Typography>
            <Box sx={{
                width: '80%',

                justifyItems: 'center'
            }}>
                <TopVolumesTable topVolumes={topVolumes} />
            </Box>

        </Box>
    );
};

export default Chart;
