import React from 'react';
import {StyledImage, StyledName, StyledQuote} from './Profile.styled';
import profileImage from './static/images/avatar/profile_image.jpeg';

const Profile = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row-reverse', width: '100%'}}>
            <StyledImage src={profileImage} alt="profile_image" />
            <StyledName style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                <span style={{backgroundColor: '#FFFF00', height: 'fit-content'}}>Hey, I'm Hiru Fernando</span>
                <StyledQuote style={{textAlign: 'center'}}>Continuous Learning, Infinite Solutions: My Code Journey</StyledQuote>
            </StyledName>
        </div>
    )
};

export default Profile;

