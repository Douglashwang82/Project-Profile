import React from 'react';
import autorepair from "../../static/autorepair.png";
import { 
    Container,
    ProjectsFrame,
    ProjectCard,
    ProjectImg,
    HiddenBoarder,

} from './FeaturedProjectElements';

export const FeaturedProjects: React.FC = () => {
    return ( <>
        <Container>
            <ProjectsFrame>
            <h1>Featured Projects</h1>
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