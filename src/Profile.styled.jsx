import styled from 'styled-components';

const StyledImage = styled.img`
    border-radius: 50%;
    width: 500px;
    height: 500px;
    box-shadow: 1px 1px 10px 1px grey;
    background-position: center;
    background-size: auto 80px;
    display: block;
    margin-left: auto;
    margin-right: auto;
`;

const StyledContainer = styled.div`
   font-family: 'Caveat', cursive;
`;
const StyledText = styled.h1`
    font-size: 30px;
    font-style: italic;
    font-weight: 1;
    color: white;
`;
const StyledName = styled.h1`
    font-size: 35px;
    font-weight: 1;
    color: white;
    font-family: 'Caveat', cursive;
    font-size: 60px;
`;

const StyledQuote = styled.h2`
    font-family: 'Chakra Petch', sans-serif;
    color: saddlebrown;
    font-size: 30px;
`;

export {StyledImage, StyledContainer, StyledText, StyledName, StyledQuote};