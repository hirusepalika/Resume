import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {StyledName} from './Profile.styled';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import {StyledText, StyledLink} from './ContactMe.styled';

const ContactMe = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <StyledName>Contact Me</StyledName>
            {/* <KeyboardDoubleArrowDownIcon style={{fontSize: '100px', color: 'wheat'}}/> */}
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '8%'}}>
                <div>
                    <LinkedInIcon style={{fontSize: '200px', color: 'wheat', stroke: 'white'}}/>
                    <br/>
                    <StyledLink href="https://www.linkedin.com/in/hiruf/"><StyledText>LinkedIn Profile</StyledText></StyledLink>
                </div>
                <FacebookIcon style={{fontSize: '200px', color: 'wheat', stroke: 'white'}}/>
                <div>
                    <ContactMailIcon style={{fontSize: '200px', color: 'wheat', paddingLeft: '25px', stroke: 'white'}}/>
                    <br/>
                    <StyledLink href="mailto:hirusepalika@gmail.com"><StyledText>Email me</StyledText></StyledLink>
                </div>
            </div>
        </div>
        

    )
}

export default ContactMe;