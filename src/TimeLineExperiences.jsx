import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import {StyledContainer, StyledTitle, StyledImage, StyledHeader} from './TimeLineExperiences.styled';
import { BiDownArrowCircle } from 'react-icons/bi'; 

// TODO: reeplace styled image with text -> my experiences
const ExperiencesTimeline = () => {

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const myScrollFunc = () => {
        const arrow = document.getElementById("arrow");
        var y = window.scrollY;
        console.log('height ', window.scrollY)
        if (y > 0 && arrow.classList) {
            arrow.classList.add("hide");
        } else {
            arrow.classList.remove("hide");
        }
    }
    window.addEventListener("scroll", myScrollFunc);

  return (
    <StyledContainer>
        <StyledHeader>My experiences</StyledHeader>
        <div style={{display: 'flex', flexDirection: 'column', width: '700px'}}>
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
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '10px', marginLeft: '10px'}}>
            <StyledHeader>Skills + Tools</StyledHeader>
            <StyledTitle>Programming Skills</StyledTitle>
            <ul>
                <li>
                    Golang (advanced)
                </li>
                <li>
                    React JS (advanced)
                </li>
                <li>
                    HTML (advanced)
                </li>
                <li>
                    CSS (advanced)
                </li>
                <li>
                    SQL (intermediate)
                </li>
                <li>
                    Material UI
                </li>
                <li>
                    Python
                </li>
                <li>
                    Java
                </li>
                <li>
                    Swift
                </li>
                <li>
                    SQL (intermediate)
                </li>
                <li>
                    C#
                </li>
                <li>
                    C
                </li>
                <li>
                    Angular JS
                </li>
                <li>
                    Microservices
                </li>
                <li>
                    Web APIs (gRPC and GraphQL)
                </li>
                <li>
                    Node JS
                </li>
                <li>
                    React Unit Testing (Jest and React Testing Library)
                </li>
            </ul>
            <StyledTitle>Soft Skills</StyledTitle>
            <ul>
                <li>
                    Adaptable
                </li>
                <li>
                    Goal oriented
                </li>
                <li>
                    Detail Oriented
                </li>
                <li>
                    Communicative
                </li>
                <li>
                    Teamwork
                </li>
                <li>
                    Enthusiastic
                </li>
                <li>
                    Agile
                </li>
            </ul>
            <StyledTitle>Tools</StyledTitle>
            <ul>
                <li>
                    Kubernetes
                </li>
                <li>
                    Docker
                </li>
                <li>
                    Github
                </li>
                <li>
                    Jupyter Notebook
                </li>
                <li>
                    Debezium
                </li>
                <li>
                    Kafka Connect
                </li>
                <li>
                    Terminal
                </li>
                <li>
                    VS Code
                </li>
                <li>
                    Eclipse IDE
                </li>
            </ul>
        </div>
        <BiDownArrowCircle id="arrow" size={70} className="scroll-down-link scroll-down-arrow" style={{top: '90%'}} onClick={scrollToBottom} />
    </StyledContainer>
  );
}

export default ExperiencesTimeline