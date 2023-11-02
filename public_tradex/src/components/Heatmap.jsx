import React, { useEffect, useState } from 'react';
import { Box, Stack } from '@mui/material';
import { createTheme, padding } from '@mui/system';
import theme from './Theme.jsx';
import axios from 'axios';
import CryptoBox from './CryptoBox.jsx';
import Loader from './Loader.jsx'

const heatmap = () => {

    const [cryptoData, setCryptoData] = useState([]);
    const [loading, setLoading] = useState(true);

const getTop100CryptoIds = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/list');
    const cryptoList = response.data;

    // Extract the IDs of the top 100 cryptocurrencies
    const top100CryptoIds = cryptoList.slice(0, 50).map(crypto => crypto.id);

    return top100CryptoIds;
  } catch (error) {
    console.error('Error fetching crypto list:', error);
    return [];
  }
};
useEffect(() => {
    const fetchCryptoData = async () => {
      const top100CryptoIds = await getTop100CryptoIds();
  
      if (top100CryptoIds.length === 0) {
        console.log('wait');
      }
  
      axios
        .get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            ids: top100CryptoIds.join(','),  // Join the IDs as a comma-separated string
            order: 'market_cap_desc',
            per_page: 50,
            page: 1,
            sparkline: false,
            price_change_percentage: '24h',
          },
        })
        .then((response) => {
          setCryptoData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching data: ', error);
        });
    };
  
    fetchCryptoData();
  }, []);
  


    return ( 
        <div style={{ marginLeft: '270px',
        paddingTop: '2rem', padding: '20px', paddingBottom: 0}}>
             <h2 style={{ fontSize: '2.5rem', paddingBottom: 0, margin: 0}} >Heatmap</h2>
                <p style={{fontSize: '1.4 rem', color: theme.palette.text.secondary, marginTop: 0, marginBottom: '3rem'}}>We,re happy to see you back here </p>
                <Box sx={{
                    display: 'flex',
                }}>
                     {loading ? ( // Display loading spinner when loading is true
      <Box sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}> <Loader /> </Box>
        ) : (
                <Box
                    sx={{
                        paddingLeft: 2,
                        textAlign: 'left',
                        width: '100%',
                        height: '100%',
                        padding:0,
                        display: 'flex',
    flexWrap: 'wrap',  // Allow items to wrap to the next row
    justifyContent: 'space-between', 
                          // Spread items evenly in the container
                       
                    }}
                    >
                        {cryptoData.map((crypto) => (
                            <CryptoBox key={crypto.id} data={crypto} />
                        ))}
                </Box>
                 )}
                </Box>
                
        </div>
     );
}
 
export default heatmap;