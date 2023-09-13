import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import {StyledName} from './Profile.styled';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const ContactMe = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <StyledName>Contact Me</StyledName>
            <KeyboardDoubleArrowDownIcon style={{fontSize: '100px', color: '#C4A484'}}/>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div>
                    <LinkedInIcon style={{fontSize: '200px', color: '#C4A484'}}/>
                    <br/>
                    <h>LinkedIn Profile</h>
                </div>
                <FacebookIcon style={{fontSize: '200px', color: '#C4A484'}}/>
                <a href="mailto:hirusepalika@gmail.com"><ContactMailIcon style={{fontSize: '200px', color: '#C4A484', paddingLeft: '25px'}}/></a>
            </div>
        </div>
        

    )
}

export default ContactMe;