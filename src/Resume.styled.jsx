import styled from 'styled-components';
import Button from '@mui/material/Button';

const StyledNavBarButton = styled(Button)``;

const StyledNavBar = styled.div`
    button {
        color: darkorange;
        border-color: white;
        margin: 25px;
        border-block-width: initial;
        box-shadow: 0px 0px 10px 2px orange;
    }
`

const StyledContainer = styled.div`
    max-width: 1680px;

    .innerDiv {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        /* max-height: 1200px; */
        align-content: center;
        max-width: 100%;
        /* justify-content: center; */
    }

    @media screen and (min-width: 1680px) {
    .innerDiv {
            flex-direction: row;
        }
    }
`;


export {StyledNavBarButton, StyledNavBar, StyledContainer};