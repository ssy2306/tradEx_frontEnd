// HomePage.js
import { ThemeProvider, createTheme } from '@mui/system';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import axios from "axios";
import './HomePage.css'
import shahil from './PASSPORT.png'
import prangya from './prangya.jpg'
import anshul from './anshul.jpg'
import shruti from './shruti.jpg'

const theme = createTheme({
  palette: {
    background: {
      paper: '#050505',
    },
    text: {
      primary: '#1F1F1F',
      secondary: '#46505A',
      third: '#31C48D'
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
});


function HomePage() {
  return (
    <Box sx={{ marginLeft: '248px', }}>
      <Box
        sx={{
          padding: '20px',
          paddingRight: 0,
          backgroundColor: '#111111',
          backgroundImage: 'linear-gradient(45deg,rgb(49, 196, 141), #111111, #000000)',

          backgroundSize: '200% 200%',
          animation: 'gradientAnimation 5s linear infinite',
        }}
      >
        <Box sx={{ paddingTop: 16, color: '#31c48d', paddingLeft: 4 }}>
          Safe // Secure // Private
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', paddingBottom: 12 }}>
          <Box sx={{
            paddingLeft: 10, fontSize: '40px', fontWeight: 'bold', justifyItems: 'center',
            alignItems: 'center', textAlign: 'left', width: '50%'
          }}>
            The new world of digital currency,<br />
            Explore more!
          </Box>
          <Box sx={{ width: '75%' }}>
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/businessman-investing-in-stock-market-6550416-5438360.png" />
          </Box>
        </Box>
      </Box>

      <Box sx={{ paddingTop: 5 }} >
        <Box sx={{
          fontSize: '40px', fontWeight: 'bold', justifyItems: 'center',
          alignItems: 'center', textAlign: 'center', paddingBottom: 5
        }}>
          Our Team<br />
        </Box>
        <Box sx={{ display: 'flex', flex: 'wrap', paddingLeft: 20, marginLeft: 10, alignContent: 'center', textAlign: 'center', alignItems: 'center', paddingBottom: 5 }}>
          <Box sx={{ textAlign: 'center' }}>
            <img src={prangya} style={{ height: 100, width: 100, borderRadius: '50%' }} /><br />
            Prangya Paramita
          </Box>
          <Box sx={{ textAlign: 'center', paddingLeft: 10 }}>
            <img src={shruti} style={{ height: 100, width: 100, borderRadius: '50%' }} /><br />
            Shruti Bhattacharya
          </Box>
          <Box sx={{ textAlign: 'center', paddingLeft: 10 }}>
            <img src={anshul} style={{ height: 100, width: 100, borderRadius: '50%' }} /><br />
            Anshul Dubey
          </Box>
          <Box sx={{ textAlign: 'center', paddingLeft: 10 }}>
            <img src={shahil} style={{ height: 100, width: 100, borderRadius: '50%' }} /><br />
            Shahil Singh Yadav
          </Box>
        </Box>

        <Box sx={{ margin: 3, padding: 5, backgroundColor: 'black', borderRadius: '15px' }}>
          <p style={{ fontSize: 30, margin: 0 }}>About Tradez</p>
          <p style={{ justifyContent: 'space-evenly', justifyItems: 'space-evenly' }}>
            TradEz stands out as an innovative and comprehensive platform, specifically tailored for those interested in the dynamic world of cryptocurrency and investment. This platform is not just a mere trading interface; it represents a complete ecosystem that seamlessly integrates advanced technological features with a focus on user ease, transforming how users interact with the cryptocurrency market.

            Security, user education and communication are at the forefront of TradEz's offerings. The platform ensures the highest level of security for user accounts through robust authentication processes, addressing the critical need for privacy and safety in the digital asset domain.

            At the heart of TradEz is its informative heatmap, which serves as a rich resource of real-time market data and detailed insights into various cryptocurrencies. This wealth of information is designed to both enlighten and educate users, offering a deep dive into the nuances of the cryptocurrency market.

            A key feature of TradEz is its real-time data retrieval capability, powered by integration with the Coingecko API. This ensures that users have access to the latest information on the top 50 stocks, an essential tool for informed trading decisions.

            The platform's heatmap display is a unique and user-friendly feature, providing a visual snapshot of the market's performance. By color-coding stocks based on their profitability, it offers users an immediate and clear understanding of market trends.

            Another key feature is the price prediction that TradEz provides. Using an RNN (Recurrent Neural Network) model provided by Google, TradEz yields a prediction of the possible prices of the cryptocurrency the user selects in the near future, enabling them to make informed decisions on possible areas of investment. (WE DO NOT CLAIM OUR RESULTS TO BE ACCURATE BEYOND DOUBT, ANY MARKET DECISIONS SHOULD BE MADE KEEPING IN MIND THAT OUR RESULTS ARE MERELY A PREDICTION AND DO NOT REPLICATE THE FUTURE WITHOUT ERROR).

            Beyond technical functionalities, TradEz emphasizes community building and user interaction. It provides various platforms for users to connect, share insights, and discuss trends, creating a supportive and engaging community environment, particularly beneficial for those new to cryptocurrency.


          </p>
          <p style={{ justifyContent: 'space-evenly', justifyItems: 'space-evenly' }}>

            Furthermore, the Ask Bot feature underscores TradEz's commitment to user support. This digital assistant is available to offer guidance on crypto trades and investment strategies, making the platform a valuable resource for both trading and educational purposes.

            In conclusion, TradEz is more than just a trading platform; it's a holistic, secure, and user-centric solution that caters to a wide range of needs for its users. By combining technological advancements, educational content, and a strong sense of community, TradEz positions itself as a leading figure in the world of digital asset trading.

          </p>
        </Box>
      </Box>
      <Box sx={{ backgroundColor: '#000000', paddingLeft: 10, paddingTop: 5, paddingRight: 10, paddingBottom: 5, textAlign: 'center' }}>
        Thank You for reading ❤️
      </Box>
    </Box>
  );
}

export default HomePage;
