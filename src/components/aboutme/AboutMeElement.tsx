import styled, {keyframes} from "styled-components";
import Avatar from '@mui/material/Avatar';
export const rotate = keyframes`

    0% {
      filter: hue-rotate(0deg);
      border-top-left-radius: 50%;
      border-top-right-radius: 30%;
      border-bottom-right-radius:50%;
      border-bottom-left-radius: 40%;
    }
    100% {
      filter: hue-rotate(180deg);
      border-top-left-radius: 30%;
      border-top-right-radius:  50%;
      border-bottom-right-radius:30%;
      border-bottom-left-radius: 50%;
    }
    `

const myFade = keyframes`

    from {
        opacity: 0;
    }

    to {
        opacity:1;
    }


`

export const Container = styled.div`
    color:white;
    margin-top:250px;
`

export const CardFrame = styled.div<{ theme:string}>`

    height:100%;
    margin:auto;
    width: 50%;
    
    display: grid;
    grid-template-columns:50% 50%;
    justify-content:space-between;
    min-width:400px;
    @media only screen and (max-width: 500px) {
        grid-template-columns:auto;
        justify-content:center;
      }

      animation: ${myFade} 4s linear forwards; 

`

export const Card = styled.div`
`

export const MyAvatar =styled.img`
position:relative;
border:solid;
color:Lightgreen;
width:100%;
height:auto;
z-index: 10;
animation: ${rotate} 1.5s linear infinite;
animation-direction: alternate;
@media only screen and (max-width: 500px) {
    width:300px;
}
`


export const FancyBorder = styled.div`
    

// background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
// background: linear-gradient(#14ffe9, #ffeb3b, #ff00e0);
width:70%;

animation: ${rotate} 1.5s linear infinite;
animation-direction: alternate;
& > span {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border-radius:90%;
    
    // background: radial-gradient(#03fc9d, #ed68af);
    background:Lightgreen;
    &:nth-child(1) {
        filter: blur(5px);
      }
      
      &:nth-child(2) {
        filter: blur(10px);
      }
      
      &:nth-child(3) {
        filter: blur(25px);
      }
      
      &:nth-child(4) {
        filter: blur(150px);
      }
}

`


export const TitleFrame = styled.div`
margin:auto;
width:50%;
font-family: 'Raleway', sans-serif;
`

export const MyText = styled.text`
font-family: 'Roboto Mono', monospace;

`

export const MyLi = styled.li`
    display: flex;
    font-size:10px;
    align-items: center;
    padding: 4px 0;
    box-sizing: border-box;
&:before {
    content: "🔵"; /* FontAwesome Unicode */
    color:red;
    font-size: 0.3rem;
    text-align: left;
    font-weight: bold;
    min-width: 20px;
    text;
    lign-self: flex-start;
    background-image: linear-gradient(red, yellow, blue);
    background-attachment: fixed;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
};

`