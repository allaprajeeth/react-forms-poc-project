import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SideBar from '../side-bar/side-bar.component';
import { useNavigate } from 'react-router-dom';

function Navbar(props: any) {
    let navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <SideBar />
                    
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Json Forms POC
                    </Typography>
                    <Button onClick={() => navigate('/register')} color="inherit">Register</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;