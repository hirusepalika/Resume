import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    height: 550px;
    background-color: #E9DAC4;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
`
const StyledTitle = styled.h1`
    font-size: 35px;
    font-weight: 1;
    color: white;
    font-family: 'Caveat', cursive;
    font-size: 35px;
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

const StyledList = styled.li`
    li {
        font-size: 18px;
        color: saddlebrown;
    }
`;

export { StyledContainer, StyledTitle, StyledImage, StyledList };