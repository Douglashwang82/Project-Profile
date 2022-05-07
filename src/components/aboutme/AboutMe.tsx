import React, { useEffect, useState, useRef } from 'react';
import meImg from "../../static/newmes.jpg";
import meAvatar from "../../static/lol_avatar.jpg";
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
    MyLi,

} from './AboutMeElement';



export const AboutMe: React.FC = () => {
    
    const [isAvatar, setIsAvatar] = useState<boolean>(false);
    return (
        // <div ref={ref}>
            <Container>
                {/* <CardFrame id={isVisible ? "show" : "hidden"}> */}
                <TitleFrame>
                <h1>About Me</h1>
                </TitleFrame>
                <CardFrame >
                    <Card>
                        <MyText>
                                Hi, I am Douglas. Enjoying in building and designing website with entertainment and user-friendly UI. Proficient in HTML/CSS, Javascript, and modern front end frameworks. I am passionate about learning new design trends and deliver ideas to the online community.
                                
                        </MyText>
                        <ul>
                            <MyLi>HTML/CSS</MyLi>
                            <MyLi>HTML/CSS</MyLi>
                            <MyLi>HTML/CSS</MyLi>

                        </ul>
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

