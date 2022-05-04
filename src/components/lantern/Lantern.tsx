import React from 'react';
import Spline from '@splinetool/react-spline';
import { Container,
    MySpline,
    Card,
    NameLabel,
    GreetingLabel,
    BioLabel,
} from './LanternElements';
export const Lantern: React.FC = () => {
    return (<>
        <Container>
            <Card>
            <GreetingLabel>Hi, My name is</GreetingLabel><br/>
            <NameLabel>Douglas Hwang</NameLabel><br/>
            <BioLabel>I am a software engineer specializing in building and designing web applications.</BioLabel>
            </Card>
            {
            window.screen.width <= 768 ?
            <p>here is some thing</p> :
            <p>there is nothing</p>
            }
            <MySpline scene="https://prod.spline.design/RhniX4xuYOGdSlt8/scene.spline" />
        </Container>

        
    </>);
} 



