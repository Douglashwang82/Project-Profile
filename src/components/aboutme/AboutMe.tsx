import React, { useEffect, useState, useRef } from 'react';
import meImg from "../../static/mes.jpg";
import meAvatar from "../../static/lol_avatar.jpg";
import {Fade} from 'react-awesome-reveal';
import { useInView } from "react-intersection-observer";
import {useIntersection} from '../helpers/useIntersection';



import {
    Container,
    MyAvatar,
    CardFrame,
    Card,
} from './AboutMeElement';


export const AboutMe: React.FC = () => {
    
    const [isAvatar, setIsAvatar] = useState<boolean>(false);
    return (
        // <div ref={ref}>
            <Container>
                {/* <CardFrame id={isVisible ? "show" : "hidden"}> */}
                <CardFrame >
                    <Card>
                        <h1>About Me</h1>
                        <p>12312312321</p>
                    </Card>
                    <Card>
                        {isAvatar
                            ?
                            <MyAvatar src={meAvatar} onMouseEnter={() => setIsAvatar(!isAvatar)} onMouseLeave={() => setIsAvatar(!isAvatar)}/>
                            :
                            <MyAvatar src={meImg} onMouseEnter={() => setIsAvatar(!isAvatar)} onMouseLeave={() => setIsAvatar(!isAvatar)}/>
                        }
                    </Card>
                </CardFrame>
            </Container>
        // </div>
        );
}

