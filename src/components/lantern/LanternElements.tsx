import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import { keyframes } from 'styled-components';


const myFade = keyframes`
  0% {
     opacity: 0;
     bottom: -1000px;
  }

  25% {
    
  }

  50% {
    opacity: 0;
  }

  75% {
    opacity: 0.5;
  }

  100% {
      opacify: 1;
      
  }
`

export const Container = styled.div`
    width:100%;
    min-width:480px;
    color:white;
    margin:auto;
`

export const MySpline = styled(Spline)`

justify-content:center;
animation: ${myFade} 2s linear;
`
export const Card = styled.div`
    height:30vh;
    
    @media only screen and (max-width: 500px) {
    }

`
export const GreetingLabel = styled.text`
    font-size:15px;
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto Mono', monospace;
    color: #B3FFB5;
    
    
    @media only screen and (max-width: 500px) {
        font-size:10px;
    }
`
export const NameLabel = styled.text`
    font-size:5vw;
    
    font-family: 'Raleway', sans-serif;
    @media only screen and (max-width: 900px) {   
        font-size:50px;
    }
`
export const BioLabel = styled.article`
    font-size:20px;
    width:10%;
    min-width:480px;
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto Mono', monospace;
    color: #B3FFB5;
    @media only screen and (max-width: 500px) {
        font-size:20px;
    }
`



export const SplineFrame = styled.div`

    height:65vh;

    width:100%;
    
`
export const Spinner = styled.div``

export const SubCard = styled.div`

height:25vh;
margin:auto;
width:60%;
padding-top:80px;
min-width:800px;    
@media only screen and (max-width: 500px) {
    width:90%;
    
}
`