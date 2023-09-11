import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useNavigate } from 'react-router-dom';

function SideBar(props: any) {
    const [status, setStatus] = useState(false);
    let navigate = useNavigate() 

    const toggleDrawer = () => {
        setStatus(!status);
    };

    const handleClick = (route: string) => {
        setStatus(false);
        navigate("/"+route)
    }

    const list = () => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                {['stepper-form', 'custom-renderer'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton onClick={() => handleClick(text)}>
                            <ListItemIcon>
                                <ArrowRightIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>            
        </Box>
    );

    return (
        <Fragment>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => toggleDrawer()}
            >
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor="left"
                open={status}
                onClose={() => null}
                onOpen={() => null}
            >
                {list()}
            </SwipeableDrawer>

        </Fragment>


    );
}

export default SideBar;