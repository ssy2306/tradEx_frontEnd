import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 18,
    padding: '10px 10px',
    width: '100%',
    border: '0px solid',
    margin:0,
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