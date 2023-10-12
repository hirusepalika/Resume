import React from 'react';
import Profile from './Profile';
import Education from './Education';
import ExperiencesTimeline from './TimeLineExperiences';
import ContactMe from './ContactMe';
import Fade from '@mui/material/Fade';


const Pages = ({clickedTab}) => {
    // useEffect(() => {
    //     document.querySelector('.hello').scrollIntoView({ 
    //         behavior: 'smooth' 
    //     });

    // },[]);

    return(
        <div> 
            <Fade in={clickedTab === 'profile'}><section id='section01' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}><Profile /></section></Fade>
            {/* <a id="scrollArrow" href="#section02" class="scroll-down-link scroll-down-arrow"  data-icon/> */}
            <Fade in={clickedTab === 'education'}><section style={{height: '100%'}}><Education /></section></Fade>
            {/* <a id="scrollArrow" href="#section02" class="scroll-down-link scroll-down-arrow"  data-icon/> */}
            {/* <section><ExperiencesTimeline /></section>
            <section><ContactMe /></section> */}
        </div>
    );
};

export default Pages;