import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    height: 550px;
    margin-top: 10%;
    background-color: cadetBlue;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`
const StyledTitle = styled.h1`
    font-size: 35px;
    font-weight: 1;
    color: #C4A484;
    font-family: 'Caveat', cursive;
    font-size: 24px;
`

const StyledImage = styled.img`
    border-radius: 50%;
    width: 500px;
    height: 500px;
    box-shadow: 1px 1px 20px 1px black;
    background-position: center;
    background-size: auto 80px;
    margin-left: 20px;
    margin-top: 20px;
`;

export { StyledContainer, StyledTitle, StyledImage };