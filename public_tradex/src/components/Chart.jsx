import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TableContainer, Table, Button } from '@mui/material';
import { TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import TopVolumesTable from './TopVolumesTable';


const Chart = () => {
  // Use the `useParams` hook to access the `id` parameter from the URL
  const { id } = useParams();
  const [cryptoData, setCryptoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }
        const data = await response.json();
        setCryptoData(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchCryptoData();
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

  if (!cryptoData) {
    return <div>No data available.</div>;
  }
  const descriptionHtml = { __html: cryptoData.description.en };

  return (
        <Box sx={{
            marginLeft: '270px',
            paddingTop: '2rem',
            paddingBottom: '2rem'
        }}>

<img src={cryptoData.image}  style={{ width: '40px', height: '40px' }} />
          <p style={{ fontSize: '2rem', margin: 0}}><b>{cryptoData.name}</b></p>   
    <Typography variant='h5'> <Box sx={{
        color: 'white',
        bgcolor: '#000000',
        padding: 1,
        width: '100%',
        maxWidth: 100,
        borderRadius: 2,
        textAlign: 'center'
    }} >
    Rank #{cryptoData.coingecko_rank} 
</Box></Typography>
      <Typography variant="h6">Profile</Typography>
      <Typography variant="body1" dangerouslySetInnerHTML={descriptionHtml} />
      <Typography variant="h6">Website</Typography>
      <Typography variant="body1">
        <a href={cryptoData.links.homepage[0]} target="_blank" rel="noopener noreferrer">
          meta.com
        </a>
      </Typography>
      <Typography variant="h6">Number of Employees</Typography>
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
