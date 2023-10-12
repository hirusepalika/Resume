import React from 'react';
import {StyledImage, StyledName, StyledQuote} from './Profile.styled';
import profileImage from './static/images/avatar/profile_image.jpeg';

const Profile = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <StyledImage src={profileImage} alt="profile_image" />
            <StyledName style={{textAlign: 'center', marginLeft: '20px', marginRight: '20px'}}>
                Hey, I'm Hiru Fernando
                <StyledQuote style={{textAlign: 'center'}}>Continuous Learning, Infinite Solutions: My Code Journey</StyledQuote>
            </StyledName>
        </div>
    )
};

export default Profile;

