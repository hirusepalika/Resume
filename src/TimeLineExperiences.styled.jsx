import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    height: 550px;
    position: absolute; 
    top: 50%;
    transform: translateY(-50%);

    .truncated {
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
        max-width: 500px;
        list-style-type: square;
    }

    .truncated:hover{
        overflow: visible;        // this makes the overflowing text visible on hover
        white-space: normal;
        height:auto;
        list-style-type: square;
    }
`
const StyledTitle = styled.h1`
    font-size: 35px;
    font-weight: 1;
    color: '#413F3D';
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
        color: lightslategray;
    }
`;

export { StyledContainer, StyledTitle, StyledImage, StyledList };