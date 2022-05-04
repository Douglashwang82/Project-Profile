import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
export const Container = styled.div`
    width:100%;
    min-width:480px;
    color:white;
`

export const MySpline = styled(Spline)`
`
export const Card = styled.div`
    position:absolute;
    left:20%;
    top:10%;
    @media only screen and (max-width: 500px) {
        left:0;
        top:5%;
        padding:10px;
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
    font-size:80px;
    font-family: 'Raleway', sans-serif;
    @media only screen and (max-width: 500px) {
        font-size:40px;
    }
`
export const BioLabel = styled.article`
    font-size:20px;
    width:60%;
    min-width:480px;
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto Mono', monospace;
    color: #B3FFB5;
    @media only screen and (max-width: 500px) {
        font-size:20px;
    }
`