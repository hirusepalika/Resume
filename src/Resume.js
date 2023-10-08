import Profile from './Profile';
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import NavBar from './NavBar';
import ContactMe from './ContactMe';
import ExperiencesTimeline from './TimeLineExperiences';
import Education from './Education';


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
    <>
        <Router>
          <div style={{display: 'flex',  alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <NavBar/>
            <AppRoutes/>
          </div>  
        </Router>
    </>
    
  );
}
export default Resume;
