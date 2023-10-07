import styled from 'styled-components';
import Button from '@mui/material/Button';

const StyledText = styled.h1`
    font-family: 'Caveat', cursive;
    text-align: center;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: #C4A484;
`;

const StyledContactTitle = styled.h1`
    font-family: 'Montserrat', sans-serif;
    color: #C4A484;
    font-size: 40px;
`;

const StyledForm = styled.form`
    background: #E9DAC4;
    padding: 40px;
    border-radius: 1.5rem;

    button{
        margin-top: 20px;
    }
`;

const StyledLoadingForm = styled.form`
    background: #E9DAC4;
    padding: 40px;
    border-radius: 1.5rem;
    height: 200px;
    button{
        margin-top: 20px;
        color: saddlebrown !important;
        border-color: saddlebrown !important;
    }

    #contact-button{
        color: saddlebrown !important;
        border-color: saddlebrown !important;
    }
`;

const StyledButton = styled(Button)`
    margin-top: 20px;

   
`;

export {StyledText, StyledLink, StyledContactTitle, StyledForm, StyledButton, StyledLoadingForm};