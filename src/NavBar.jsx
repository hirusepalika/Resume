import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import Tab from '@mui/material/Tab';
import {StyledBox, StyledTabs} from './NavBar.styled';

const NavBar = () => {

    const history = useNavigate();

    const handleClickHome = () => {
        history("/home")
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

    const [onMouseOver, setOnMouseOver] = useState({id: 0, setHover: false});

    return (
        <StyledBox id="tab" sx={{ width: '100%', borderBottom: '1px', marginTop: '20px', marginLeft: '20px' }}>
            <StyledTabs
                value={value}
                onChange={handleChange}
                aria-label="wrapped label tabs example"
                TabIndicatorProps={{style: {background:'darkorange'}}}
            >
                <Tab 
                    onMouseOver={() => setOnMouseOver({id: 1, setHover: true})} 
                    onMouseOut={() => setOnMouseOver({id: 1, setHover: false})} 
                    style={{fontSize: onMouseOver.id === 1 && onMouseOver.setHover ? '30px': '20px', color: 'darkorange'}}
                    label="Home" 
                    onClick={handleClickHome}
                />
                <Tab 
                    onMouseOver={() => setOnMouseOver({id: 2, setHover: true})} 
                    onMouseOut={() => setOnMouseOver({id: 2, setHover: false})} 
                    style={{fontSize: onMouseOver.id === 2 &&  onMouseOver.setHover ? '30px': '20px', color: 'darkorange'}}
                    label="Education" 
                    onClick={handleClickEducation}
                />
                <Tab 
                    onMouseOver={() => setOnMouseOver({id: 3, setHover: true})} 
                    onMouseOut={() => setOnMouseOver({id: 3, setHover: false})} 
                    style={{fontSize: onMouseOver.id === 3 && onMouseOver.setHover ? '30px': '20px', color: 'darkorange'}}
                    label="Experiences" 
                    onClick={handleClickExperiences}/>
                <Tab 
                    onMouseOver={() => setOnMouseOver({id: 4, setHover: true})} 
                    onMouseOut={() => setOnMouseOver({id: 4, setHover: false})} 
                    style={{fontSize: onMouseOver.id === 4 && onMouseOver.setHover ? '30px': '20px', color: 'darkorange'}}
                    label="Contact me" 
                    onClick={handleClickContactMe}/>
            </StyledTabs>
        </StyledBox>
    )
}

export default NavBar;