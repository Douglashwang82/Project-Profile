import styled, {keyframes} from 'styled-components';


const myFade = keyframes`
    from {
        position: relative;
        opacity: 0;
        bottom: -100px;
    }

    to {
        position: relative;
        opacity: 1;
        bottom:0px;
    }
`


export const Container = styled.div`
position: relative;
margin-top:250px;
#show{
    animation: ${myFade} 0.5s linear forwards; 
    }
@media only screen and (max-width: 500px) {
    margin-top:100px;
}
`