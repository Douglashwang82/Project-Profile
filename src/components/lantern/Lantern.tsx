import React, {useEffect, useState} from 'react';
import Spline from '@splinetool/react-spline';
import { Fade, FadeProps } from "react-awesome-reveal";
import { ScrollBox } from '../scrollbox/ScrollBox';
import { Container,
    MySpline,
    Card,
    NameLabel,
    GreetingLabel,
    BioLabel,
    SplineFrame,
    SubCard,

} from './LanternElements';


function MyMySpline(props: {scene: string}) {
    const [isMount, setIsMount] = useState<Boolean>(false);
    useEffect(() => {
        setIsMount(true);
    })
    return (
        <>
        { isMount ?
            <SplineFrame>
            <MySpline scene = {props.scene}/> 
            
            </SplineFrame>
            :
            <SplineFrame>
                <h1>123</h1>
            </SplineFrame>
        }
        </>
    )
    
}

export const Lantern: React.FC = () => {
    return (<>
        <Container>
            <Card>
            <SubCard>
            <GreetingLabel>Hi, My name is</GreetingLabel><br/>
            <NameLabel>Douglas Hwang</NameLabel><br/>
            <BioLabel>I am a software engineer specializing in building and designing web applications.</BioLabel>
            </SubCard>
            </Card>
            {
            window.screen.width <= 768 ?
            <p>here is some thing</p> :
            <div>
            {/* <MySpline scene="https://prod.spline.design/RhniX4xuYOGdSlt8/scene.spline" /> */}
            <MyMySpline scene="https://prod.spline.design/RhniX4xuYOGdSlt8/scene.splinecode" /> 
            </div>
            }
        </Container>

        
    </>);
} 



