import React, { useRef, useState, useEffect } from 'react';
import autorepair from "../../static/autorepair.png";
import { useInView } from "react-intersection-observer";
import { 
    Container,
    ProjectsFrame,
    ProjectCard,
    ProjectImg,
    HiddenBoarder,
    TitleFrame,
    Title,
    TextSection,
    ImgSection,

} from './FeaturedProjectElements';

export const FeaturedProjects:React.FC  = () => {

    return ( <>
        <Container>
                <TitleFrame>

                <Title>Featured Projects</Title>
                </TitleFrame>
            <ProjectsFrame >

            <ProjectCard>
            <div>
                <TextSection id="b">
                <h2>a project</h2>
                <p>123213123123123</p>
                <p>123213123123123</p>
                <p>123213123123123</p>
                <p>123213123123123</p>
                <p>123213123123123</p>
                </TextSection>
                <ImgSection >
                    <ProjectImg src={autorepair}></ProjectImg>
                </ImgSection>

            </div>
            </ProjectCard>
            <br></br>
            <ProjectCard>
                <div>
            <TextSection id="b">
                <h2>a project</h2>
                <p>123213123123123</p>
                <p>123213123123123</p>
                <p>123213123123123</p>
                <p>123213123123123</p>
                <p>123213123123123</p>
                </TextSection>
                <ImgSection >
                    <ProjectImg src={autorepair}></ProjectImg>
                </ImgSection>
                </div>
            </ProjectCard>
            <br></br>
            <br></br>
            <br></br>
            <HiddenBoarder>
            <ProjectCard>
                <div>
                <h2>a project</h2>
                <p>123213123123123</p>
                </div>
                <div>
                    <ProjectImg src={autorepair}></ProjectImg>
                </div>
            </ProjectCard>
            </HiddenBoarder> 
            </ProjectsFrame>
        </Container>
    </>);
}