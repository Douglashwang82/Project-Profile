import React, { useEffect, useState, useRef } from 'react';
import meImg from "../../static/newmes.jpg";
import meAvatar from "../../static/lol_avatar.jpeg";
import {Fade} from 'react-awesome-reveal';
import { useInView } from "react-intersection-observer";
import {useIntersection} from '../helpers/useIntersection';



import {
    Container,
    MyAvatar,
    CardFrame,
    Card,
    FancyBorder,
    TitleFrame,
    MyText,
    MyUl,
    MyLi,
    UlList,
    Title

} from './AboutMeElement';



export const AboutMe: React.FC = () => {
    
    const [isAvatar, setIsAvatar] = useState<boolean>(false);
    return (
        // <div ref={ref}>
            <Container>
                {/* <CardFrame id={isVisible ? "show" : "hidden"}> */}
                <TitleFrame>
                <Title>About Me</Title>
                </TitleFrame>
                <CardFrame >
                    <Card>
                        <div style={{"width":"85%"}}>
                        <MyText>
                                Hi, I am Douglas. Enjoying in building and designing website with entertainment and user-friendly UI. Proficient in HTML/CSS, Javascript, and modern front end frameworks. I am passionate about learning new design trends and deliver ideas to the online community.                                
                        </MyText>
                        <UlList>
                         <MyUl>
                            <MyLi color="#FF7A00">HTML</MyLi>
                            <MyLi color="#FF3D00">Git</MyLi>
                            <MyLi color="#FFF500">Javascript ES6</MyLi>
                            <MyLi color= "#00FF19">Django</MyLi>
                            <MyLi color="#00F0FF">React</MyLi>
                            <MyLi color="#0094FF">Typescript</MyLi>
                        </MyUl> 
                         <MyUl>
                            <MyLi color="#0066FF">REST</MyLi>
                            <MyLi color="#1400FF">CSS</MyLi>
                            <MyLi color2="#1400FF" color1="#FAFF00">Python</MyLi>                            
                            <MyLi color2="#FF9900" color1="white">AWS</MyLi>
                            <MyLi color="#FA00FF">GraphQL</MyLi>
                            <MyLi color="#8F00FF">(...)</MyLi>                            
                        </MyUl>
                        </UlList>
                        </div>
                    </Card>

                    <Card>
                    <FancyBorder>
                        {isAvatar
                            ?
                            <MyAvatar src={meImg} onMouseEnter={() => setIsAvatar(!isAvatar)} onMouseLeave={() => setIsAvatar(!isAvatar)}/>
                        
                            :
                            <MyAvatar src={meAvatar} onMouseEnter={() => setIsAvatar(!isAvatar)} onMouseLeave={() => setIsAvatar(!isAvatar)}/>
                            // <h1>123</h1>
                        }
                        <span/>
                        <span/>
                        <span/>
                        <span/>                        
                        </FancyBorder>
                    </Card>
                </CardFrame>
            </Container>
        // </div>
        );
}

