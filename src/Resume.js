import {useState} from 'react';
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
import Profile from './Profile';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NavBar from './NavBar';
import ContactMe from './ContactMe';


function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/profile',element:<Profile/>},
      {path:'/contactMe',element:<ContactMe/>}
    ]
  )
  return routes;
}

const Resume = () => {
  return (
    <>
        <Router>
          <div style={{width: '100%', height: '100%', display: 'flex', flexDirection: 'column'}}>
            <NavBar/>
            <AppRoutes/>
          </div>  
        </Router>
    </>
    
  );
}
export default Resume;
