import React from 'react';
import autorepair from "../../static/autorepair.png";
import { 
    Container,
    ProjectsFrame,
    ProjectCard,
    ProjectImg,

} from './FeaturedProjectElements';

export const FeaturedProjects: React.FC = () => {
    return ( <>
        <Container>
            <ProjectsFrame>
            <h1>Featured Projects</h1>

            <ProjectCard>
                <div>
                <h2>a project</h2>
                <p>123213123123123</p>
                </div>
                <div>
                    <ProjectImg src={autorepair}></ProjectImg>
                </div>
            </ProjectCard>
            <br></br>
            <ProjectCard>
                <div>
                    <ProjectImg src={autorepair}></ProjectImg>
                </div>
                <div>
                <h2>a project</h2>
                <p>123213123123123</p>
                </div>
            </ProjectCard>

            <br></br>
            <br></br>
            <br></br>
            <ProjectCard>
                <div>
                <h2>a project</h2>
                <p>123213123123123</p>
                </div>
                <div>
                    <ProjectImg src={autorepair}></ProjectImg>
                </div>
            </ProjectCard>

            </ProjectsFrame>
        </Container>
    </>);
}