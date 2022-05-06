import React, {useState, useEffect} from 'react';
import { useInView } from "react-intersection-observer";
import {Container } from './ScrollBoxElement';


type MyProps = {
    show:boolean,
}

type MyState = {
    animateClass:string,   
}


// export class ScrollBox extends React.Component<MyProps, MyState> {
//     constructor(props:MyProps){
//         super(props);
//         this.state = {
//             //MyState
//             animateClass:"hidden",
//         }
//     }
//     componentDidMount() {
//         if (this.props.show){
//             this.setState({animateClass : ""});
//         } else {
//             this.setState({animateClass : "hidden"})
//         }
//     }
//     render() {
//         return (
//             <>
//             {this.state.animateClass}
//             </>
//         );
//     }
// }

type Props = {
    id?:string,
    children: JSX.Element;
}
export const ScrollBox = ({id, children}:Props) => {

    const [isVisible, setIsVisible] = useState<boolean>(false);
    const {ref, inView} = useInView({
        threshold: 0
    });

    useEffect(() => {
        if (inView) {
            setIsVisible(true);
            console.log("contact true");
        }
        // else {
        //     setIsVisible(false);
        // }
});

    return (
        <div ref={ref} id={id}>
            <Container >
                <div id={isVisible ? "show":""}>
                {children}
                </div>
                </Container>
        </div>
    );
};