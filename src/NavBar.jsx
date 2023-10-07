import React from 'react';
import { useNavigate } from "react-router-dom";
import {StyledNavBarButton, StyledNavBar} from './Resume.styled';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {StyledTabs} from './NavBar.styled';

const NavBar = () => {

    const history = useNavigate();

    const handleClickProfile = () => {
        history("/profile")
    }

    const handleClickEducation = () => {
        history("/education")
    }

    const handleClickExperiences = () => {
        history("/experiences")
    }

    const handleClickContactMe = () => {
        history("/contactMe")
    }

    const [value, setValue] = React.useState('one');

    const handleChange = (_, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', borderBottom: '1px', marginTop: '20px', marginLeft: '20px' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                TabIndicatorProps={{style: {background:'darkorange'}}}
            >
                <Tab style={{fontSize: '20px', color: 'darkorange'}} label="Profile" onClick={handleClickProfile}/>
                <Tab style={{fontSize: '20px', color: 'darkorange'}} label="Experiences" onClick={handleClickExperiences}/>
                <Tab style={{fontSize: '20px', color: 'darkorange'}} label="Contact me" onClick={handleClickContactMe}/>
            </StyledTabs>
        </Box>
        //     <StyledNavBarButton variant="outlined" onClick={handleClickEducation}>Education</StyledNavBarButton>
    )
}

export default NavBar;