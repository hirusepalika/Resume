import Profile from './Profile';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NavBar from './NavBar';
import ContactMe from './ContactMe';
import ExperiencesTimeline from './TimeLineExperiences';
import Education from './Education';
import {StyledContainer} from './Resume.styled';


function AppRoutes() {
  const routes = useRoutes(
    [
      {path:'/Resume',element:<Profile/>},
      {path:'/home',element:<Profile/>},
      {path:'/contactMe',element:<ContactMe/>},
      {path:'/experiences',element:<ExperiencesTimeline/>},
      {path:'/education',element:<Education/>}
    ]
  )
  return routes;
}

const Resume = () => {
  return (
    <StyledContainer>
        <Router>
          <div className="innerDiv">
            <NavBar/>
            <AppRoutes/>
          </div>  
        </Router>
    </StyledContainer>
    
  );
}
export default Resume;
