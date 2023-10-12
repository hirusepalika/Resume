import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {StyledContainer, StyledTitle, StyledImage, StyledHeader} from './TimeLineExperiences.styled';

// TODO: reeplace styled image with text -> my experiences
const ExperiencesTimeline = () => {

  return (
    <StyledContainer>
        <StyledHeader>My experiences</StyledHeader>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <Timeline>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <StyledTitle>IBM: Software Developer (2019-Present)</StyledTitle>
                        <ul>
                            <li>Working on an application to maintain end-to-end process of Quote to Cash (Q2C) transactions of IBM service contracts (Internal Business tool)</li>
                            <li>Worked on setting up Kubernetes to deploy application to IBM Cloud and implemented microservices to contain each process in a service</li>
                            <li>Self-taught Golang and React JS</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <StyledTitle>IBM: Software Developer (2019-Present)</StyledTitle>
                        <ul>
                            <li>Working on an application to maintain end-to-end process of Quote to Cash (Q2C) transactions of IBM service contracts (Internal Business tool)</li>
                            <li>Worked on setting up Kubernetes to deploy application to IBM Cloud and implemented microservices to contain each process in a service</li>
                            <li>Self-taught Golang and React JS</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot variant="outlined" color="primary" />
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <StyledTitle>REU (Research Experience for Undergraduates) program at NCSU (2017 Summer)</StyledTitle>
                        <ul>
                            <li>Helped create the AI that implemented the Dynamic Difficulty Adjustment mechanic: Our goal was to analyze whether this mechanic can help game players improve their skills faster</li>
                            <li>Implemented parts of a web-based comic creation tool: It included basic features for novice comic artists (targeted audience), to get started on basic comics: The goal of the project was to analyze their thought processes on certain aspects such as, placement of certain characters or speech bubbles</li>
                            <li>Self-taught JavaScript and C#</li>
                        </ul>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>

        
    </StyledContainer>
  );
}

export default ExperiencesTimeline