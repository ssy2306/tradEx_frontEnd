import './navbarimages/navbar.css';
import logo from '../tradex_long.svg';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';
import HeatmapImage from './navbarimages/heatmap.svg';
import HomeImage from './navbarimages/home.svg';
import FeedbackImage from './navbarimages/feedback.svg';
import AskbotImage from './navbarimages/askbot.svg';
import LogoutImage from './navbarimages/logout.svg';
import CommunityImage from './navbarimages/community.svg';
import { Link } from 'react-router-dom';

// function HomeIcon(props: SvgIconProps) {
//     return (
//         <SvgIcon {...props}>
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//         </SvgIcon>
//     );
// }

const Item = styled(Paper)({
    padding: '10px',
    paddingTop: '5px',
    background: '#050505',
    color: '#1F1F1F',
    textAlign: 'center',
});

const Item2 = styled(Paper)({
    padding: '10px',
    paddingTop: '150px',
    background: '#050505',
    color: '#1F1F1F',
});

const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '10px 10px',
    width: '100%',
    border: '0px solid',
    margin: '20px',
    lineHeight: 1.5,
    backgroundColor: 'none',
    borderColor: 'none',
    color: '#898989',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#111111',
        borderColor: '#111111',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#111111',
        borderColor: 'none',
        color: '#FFFFFF'
    },
    '&:focus': {
        boxShadow: '0 0 0 0 #111111',
    },
});

function navbar() {
    return (
        <div className="Navbar">
                    <Stack spacing={0}>
                        <Item>
                            <img src={logo} className='App-logo' alt="logo" width={120} height={36} />
                            <p><b>______________________________</b></p>
                        </Item>

                        <Item>
                            <Box sx={{ width: '100%' }}>
                                <Stack spacing={2}>
                                <Link to="/home" style={{margin: '0px', padding: '0px',  }}>
                                    <BootstrapButton startIcon={<img src={HomeImage} alt="Home" style={{ width: '18px', height: '18px' }} />}>
                                        Home
                                    </BootstrapButton>
                                </Link>
                                    <BootstrapButton startIcon={<img src={HeatmapImage} alt="Heatmap" style={{ width: '18px', height: '18px' }} />}>
                                        Heatmap
                                    </BootstrapButton>
                                    <BootstrapButton startIcon={<img src={CommunityImage} alt="Community" style={{ width: '18px', height: '18px' }} />}>
                                        Community
                                    </BootstrapButton>
                                    <BootstrapButton startIcon={<img src={AskbotImage} alt="askbot" style={{ width: '18px', height: '18px' }} />}>
                                        Ask bot
                                    </BootstrapButton>
                                </Stack>
                            </Box>
                        </Item>
                        <Item2>
                        <Stack spacing={2}>
                                    <BootstrapButton startIcon={<img src={FeedbackImage} alt="Feedback" style={{ width: '18px', height: '18px',  }} />} >
                                        Feedback
                                    </BootstrapButton>
                                    <BootstrapButton startIcon={<img src={LogoutImage} alt="logout" style={{ width: '18px', height: '18px' }} />}>
                                        Logout
                                    </BootstrapButton>
                                    <p><b>______________________________</b></p>
                                    <p>Version 1.0</p>
                                </Stack>
                        </Item2>
                    </Stack>
                                  
        </div>
    );
}

export default navbar;
