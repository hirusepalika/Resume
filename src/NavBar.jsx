import React from 'react';
import { useNavigate } from "react-router-dom";
import {StyledNavBarButton, StyledNavBar} from './Resume.styled';

const NavBar = () => {

    const history = useNavigate();

    const handleClickProfile = () => {
        history("/profile")
    }

    const handleClickProjects = () => {
        history("/projects")
    }

    const handleClickContactMe = () => {
        history("/contactMe")
    }

    
    return (
        <StyledNavBar style={{marginTop: '45px', display: 'flex', justifyContent: 'center'}}>
            <StyledNavBarButton variant="outlined" onClick={handleClickProfile}>Profile</StyledNavBarButton>
            <StyledNavBarButton variant="outlined" onClick={handleClickProjects}>Projects</StyledNavBarButton>
            <StyledNavBarButton variant="outlined" onClick={handleClickContactMe}>Contact Me</StyledNavBarButton>
        </StyledNavBar>
    )
}

export default NavBar;