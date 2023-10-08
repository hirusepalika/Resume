import styled from 'styled-components';
import Tabs from '@mui/material/Tabs';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)`
   #tab button {
      font-size: 4em;
      transition: all 500ms;
   }

   #tab button:hover {
      font-size: 88px;
      font-size-adjust: 20px;
   }
`;

const StyledTabs = styled(Tabs)`
   
   button{
    font-family: 'Caveat';
    font-size: 25px;
   }
`;

export {StyledTabs, StyledBox};