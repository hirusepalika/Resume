import React, {useState} from 'react';
import georgetown from './static/images/education/georgetown.jpeg';
import ncsu from './static/images/education/ncsu.jpeg';
import {StyledHeader, StyledDate, StyledImage, StyledBody, StyledSection, StyledDiv} from './Education.styled';
import Fade from '@mui/material/Fade';

const Education = () => {
    const [sectionTwoVisibility, setSectionTwoVisibility] = useState(false);
    const myScrollFunc = () => {
        const arrow = document.getElementById("scrollArrow");
        var y = window.scrollY;
        if (y >= 500 && arrow.classList) {
            arrow.classList.add("hide");
            setSectionTwoVisibility(true)
        } else {
            arrow.classList.remove("hide");
            setSectionTwoVisibility(false)
        }
    }
    window.addEventListener("scroll", myScrollFunc);

    return(
        <StyledDiv style={{display: 'flex', flexDirection: 'column', marginLeft:'10%'}}>
            <StyledSection id='section01' style={{display: 'flex', alignSelf: 'flex-start', marginLeft: '1%'}}>
                <div style={{display: 'flex', alignSelf: 'flex-start'}}>
                    <StyledImage src={georgetown} alt="georgetown-healy-hall" />
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20%'}}>
                        <StyledHeader>Georgetown University</StyledHeader>
                        <StyledDate>Jan 2022 - Aug 2023</StyledDate>
                        <StyledBody>Technology Management with a concentration in Business Intelligence</StyledBody>
                    
                    </div>
                </div>
            </StyledSection>
            <a id="scrollArrow" href="#section02" class="scroll-down-link scroll-down-arrow"  data-icon></a>
            <Fade in={sectionTwoVisibility}>
                <StyledSection id="section02" style={{display: 'flex', alignSelf: 'flex-start', marginLeft: '1%'}}>
                    <div style={{display: 'flex', alignSelf: 'flex-start', marginTop: '20%', marginBottom: '10%'}}>
                        <StyledImage src={ncsu} alt="ncsu-sign" style={{height: '500px', width: '800px'}} />
                        <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20%'}}>
                            <StyledHeader>North Carolina State University</StyledHeader>
                            <StyledDate>Aug 2015 - May 2019</StyledDate>
                            <StyledBody>Computer Science and Mathematics</StyledBody>
                        </div>
                    </div>
                </StyledSection>
            </Fade>
        </StyledDiv>
        
    )
};

export default Education;