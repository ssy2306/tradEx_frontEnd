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
import { BootstrapButton } from './BootstrapButton';

// function HomeIcon(props: SvgIconProps) {
//     return (
//         <SvgIcon {...props}>
//             <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
//         </SvgIcon>
//     );
// }

const Item = styled(Paper)({
    padding: '10px',
    background: '#050505',
    color: '#1F1F1F',
    textAlign: 'center',
    borderBottom: '20px',
    borderColor: 'white',
    margin: 0
});

const Item2 = styled(Paper)({
    padding: '10px',
    paddingTop: '150px',
    background: '#050505',
    color: '#1F1F1F',
});


function navbar() {
    return (
        <div className="Navbar" style={{ position: 'fixed',background: '#050505', borderRight: '20px' , borderStyle: '-moz-initial'}}>
            <Stack spacing={1} >
                <Item>
                    <img src={logo} className='App-logo' alt="logo" width={120} height={36} style={{ paddingTop: 15 }} />
                    <p>-------------------------------</p>
                </Item>

                <Item>
                    <Box sx={{ width: '100%' }}>
                        <Stack spacing={2}>
                            <Link to="/home">
                            <BootstrapButton startIcon={<img src={HomeImage} alt="Home" style={{ width: '18px', height: '18px' }} />}>
                                Home
                            </BootstrapButton>
                            </Link>
                            <Link to="/heatmap">
                            <BootstrapButton startIcon={<img src={HeatmapImage} alt="Heatmap" style={{ width: '18px', height: '18px' }} />}>
                                Heatmap
                            </BootstrapButton></Link>
                            <Link to="/community">
                            <BootstrapButton startIcon={<img src={CommunityImage} alt="Community" style={{ width: '18px', height: '18px' }} />}>
                                Community
                            </BootstrapButton></Link>
                            <Link to="/askbot">
                            <BootstrapButton startIcon={<img src={AskbotImage} alt="askbot" style={{ width: '18px', height: '18px' }} />}>
                                Ask bot
                            </BootstrapButton></Link>
                        </Stack>
                    </Box>
                </Item>
                <Item2>
                    <Stack spacing={2}>
                        <Link to="/feedback">
                        <BootstrapButton startIcon={<img src={FeedbackImage} alt="Feedback" style={{ width: '18px', height: '18px', }} />} >
                            Feedback
                        </BootstrapButton></Link>
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
