import React from 'react';
import {StyledImage, StyledName, StyledQuote} from './Profile.styled';
import profileImage from './static/images/avatar/profile_image.jpeg';

const Profile = () => {
    return (
        <div style={{alignSelf: 'center', position: 'absolute', top: '55%', transform: 'translateY(-45%)'}}>
            <StyledImage src={profileImage} alt="profile_image" />
            <StyledName style={{textAlign: 'center'}}>Hey, I'm Hiru Fernando</StyledName>
            <StyledQuote style={{textAlign: 'center'}}>Continuous Learning, Infinite Solutions: My Code Journey</StyledQuote>
        </div>
    )
};

export default Profile;

