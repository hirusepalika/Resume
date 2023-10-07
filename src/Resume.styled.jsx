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

export {StyledNavBarButton, StyledNavBar};