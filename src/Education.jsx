import React from 'react';
import georgetown from './static/images/education/georgetown.jpeg';
import ncsu from './static/images/education/ncsu.jpeg';
import {StyledHeader, StyledDate, StyledImage, StyledBody, StyledSection, StyledDiv} from './Education.styled';
const Education = () => {

    const myScrollFunc = () => {
        const arrow = document.getElementById("scrollArrow");
        var y = window.scrollY;
        if (y >= 500) {
            arrow.classList.add("hide");
        } else {
            arrow.classList.remove("hide");
        }
    }
    window.addEventListener("scroll", myScrollFunc);

    return(
        <StyledDiv style={{display: 'flex', flexDirection: 'column', alignSelf: 'flex-start'}}>
            <StyledSection id='section01' style={{display: 'flex', alignSelf: 'flex-start', marginLeft: '5%'}}>
                <div style={{display: 'flex', alignSelf: 'flex-start', marginTop: '10%', marginLeft: '5%'}}>
                    <StyledImage src={georgetown} alt="georgetown-healy-hall" />
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20%'}}>
                        <StyledHeader>Georgetown University</StyledHeader>
                        
                        <StyledDate>Jan 2022 - Aug 2023</StyledDate>
                        <StyledBody>Technology Management with a concentration in Business Intelligence</StyledBody>
                    
                    </div>
                    <br/>
                </div>
            </StyledSection>
            <a id="scrollArrow" href="#section02" class="scroll-down-link scroll-down-arrow"  data-icon></a>
            <StyledSection id="section02" style={{display: 'flex', alignSelf: 'flex-start', marginTop: '20%', marginLeft: '5%'}}>
                <div style={{display: 'flex', alignSelf: 'flex-start', marginTop: '20%', marginLeft: '5%', marginBottom: '10%'}}>
                    <StyledImage src={ncsu} alt="ncsu-sign" style={{height: '500px', width: '800px'}} />
                    <div style={{display: 'flex', flexDirection: 'column', marginLeft: '20%'}}>
                        <StyledHeader>North Carolina State University</StyledHeader>
                        <StyledDate>Aug 2015 - May 2019</StyledDate>
                        <StyledBody>Computer Science and Mathematics</StyledBody>
                    </div>
                    <br/>
                </div>
            </StyledSection>
        </StyledDiv>
        
    )
};

export default Education;