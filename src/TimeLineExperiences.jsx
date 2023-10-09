import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import profileImage from './static/images/avatar/profile_image.jpeg';
import {StyledContainer, StyledTitle, StyledImage, StyledList} from './TimeLineExperiences.styled';

// TODO: reeplace styled image with text -> my experiences
const ExperiencesTimeline = () => {
  return (
    <StyledContainer>
        <StyledImage src={profileImage} alt="profile_image"/>
        <Timeline position="alternate" style={{alignItems: 'center'}}>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <StyledTitle>IBM: Software Developer (2019-Present)</StyledTitle>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <StyledList>
                        <li class="truncated bullet">Working on an application to maintain end-to-end process of Quote to Cash (Q2C) transactions of IBM service contracts (Internal Business tool)</li>
                        <li class="truncated bullet">Worked on setting up Kubernetes to deploy application to IBM Cloud and implemented microservices to contain each process in a service</li>
                        <li class="truncated">Self-taught Golang and React JS</li>
                    </StyledList>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <StyledTitle>IBM: Application Developer (2018 Summer)</StyledTitle>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <StyledList style={{textAlign: 'left'}}>
                        <li class="truncated">Worked on an automated process of analyzing transaction logs through visualizations tools (i.e. Plotly.js) that could be used by IBM Business Analysts and Dev Ops Leads</li>
                        <li class="truncated">This automated process decreased the process of putting visualizations together for specific business/technical metrics from days to minutes of work</li>
                        <li class="truncated">Learned data aggregation methods through Python development</li>
                    </StyledList>
            </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent color="text.secondary">
                    <StyledTitle>REU (Research Experience for Undergraduates) program at NCSU (2017 Summer)</StyledTitle>
                </TimelineOppositeContent>
                <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <StyledList>
                        <li class="truncated">Helped create the AI that implemented the Dynamic Difficulty Adjustment mechanic: Our goal was to analyze whether this mechanic can help game players improve their skills faster</li>
                        <li class="truncated">Implemented parts of a web-based comic creation tool: It included basic features for novice comic artists (targeted audience), to get started on basic comics: The goal of the project was to analyze their thought processes on certain aspects such as, placement of certain characters or speech bubbles</li>
                        <li class="truncated">Self-taught JavaScript and C#</li>
                    </StyledList>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    </StyledContainer>
  );
}

export default ExperiencesTimeline