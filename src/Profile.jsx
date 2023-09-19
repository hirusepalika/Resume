import React from 'react';
import {StyledImage, StyledName} from './Profile.styled';
import profileImage from './static/images/avatar/profile_image.jpeg';

const Profile = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
            <StyledImage src={profileImage} alt="profile_image" />
            <StyledName>Hey, I'm Hiru Fernando</StyledName>
        </div>
    )
};

export default Profile;

