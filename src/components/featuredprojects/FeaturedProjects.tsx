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
    TextTitle,
    TextIntro,
    TechStack,
    MyUl,
    MyLi,
    TextIntroFrame,

} from './FeaturedProjectElements';

export const FeaturedProjects: React.FC = () => {

    return (<>
        <Container>
            <TitleFrame>

                <Title>Featured Projects</Title>
            </TitleFrame>
            <ProjectsFrame >

                <ProjectCard>

                    <TextSection >
                        <TextTitle>Web App, <span style={{ "fontSize": "15px" }}>Car Repair Shop</span></TextTitle>
                        <TextIntroFrame>
                            <TextIntro>
                                A web app for a local car repair shop. Fully demonstrate the brand concept and brand value. Clean and organized design in listing provided service. Integrate with Google API to get the most recently high-rate reviews and location information. With an exceptional scheduling function that users can make an appointment without any distraction.
                            </TextIntro>
                        </TextIntroFrame>
                        <TechStack>
                            <MyUl>
                                <MyLi>React</MyLi>
                                <MyLi>Typescript</MyLi>
                                <MyLi>GooglePlaceAPI</MyLi>
                                <MyLi>AWSamplify</MyLi>
                                <MyLi>Django</MyLi>
                            </MyUl>
                        </TechStack>
                    </TextSection>
                    <ImgSection >
                        <ProjectImg src={autorepair}></ProjectImg>
                    </ImgSection>
                </ProjectCard>


                <ProjectCard>
    
                    <ImgSection >
                        <ProjectImg src={autorepair}></ProjectImg>
                    </ImgSection>
         
                    <TextSection >
                        <TextTitle>Web App, <span style={{ "fontSize": "15px" }}>Car Repair Shop</span></TextTitle>
                        <TextIntroFrame>
                            <TextIntro>
                                A web app for a local car repair shop. Fully demonstrate the brand concept and brand value. Clean and organized design in listing provided service. Integrate with Google API to get the most recently high-rate reviews and location information. With an exceptional scheduling function that users can make an appointment without any distraction.
                            </TextIntro>
                        </TextIntroFrame>
                        <TechStack>
                            <MyUl>
                                <MyLi>React</MyLi>
                                <MyLi>Typescript</MyLi>
                                <MyLi>GooglePlaceAPI</MyLi>
                                <MyLi>AWSamplify</MyLi>
                                <MyLi>Django</MyLi>
                            </MyUl>
                        </TechStack>
                    </TextSection>
                    
                </ProjectCard>

                <ProjectCard>

                    <TextSection >
                        <TextTitle>Web App, <span style={{ "fontSize": "15px" }}>Car Repair Shop</span></TextTitle>
                        <TextIntroFrame>
                            <TextIntro>
                                A web app for a local car repair shop. Fully demonstrate the brand concept and brand value. Clean and organized design in listing provided service. Integrate with Google API to get the most recently high-rate reviews and location information. With an exceptional scheduling function that users can make an appointment without any distraction.
                            </TextIntro>
                        </TextIntroFrame>
                        <TechStack>
                            <MyUl>
                                <MyLi>React</MyLi>
                                <MyLi>Typescript</MyLi>
                                <MyLi>GooglePlaceAPI</MyLi>
                                <MyLi>AWSamplify</MyLi>
                                <MyLi>Django</MyLi>
                            </MyUl>
                        </TechStack>
                    </TextSection>
                    <ImgSection >
                        <ProjectImg src={autorepair}></ProjectImg>
                    </ImgSection>
                </ProjectCard>

            </ProjectsFrame>
        </Container>
    </>);
}