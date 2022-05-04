import React, { useState } from 'react';
import meImg from "../../static/mes.jpg";
import meAvatar from "../../static/lol_avatar.jpg";


import {
    Container,
    MyAvatar,
    CardFrame,
    Card,
} from './AboutMeElement';



export const AboutMe: React.FC = () => {

    const [isAvatar, setIsAvatar] = useState<boolean>(false);

    return (
        <>
            <Container>
                <CardFrame>
                    <Card>
                        <h1>About Me</h1>
                        <p>12312312321</p>
                    </Card>
                    <Card>
                    <div>
                        {isAvatar
                            ?
                            <MyAvatar src={meAvatar} onMouseEnter={() => setIsAvatar(!isAvatar)} onMouseLeave={() => setIsAvatar(!isAvatar)}/>
                            :
                            <MyAvatar src={meImg} onMouseEnter={() => setIsAvatar(!isAvatar)} onMouseLeave={() => setIsAvatar(!isAvatar)}/>
                        }
                    </div>
                    </Card>
                </CardFrame>
            </Container>
        </>);
}

