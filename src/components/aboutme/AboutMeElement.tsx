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
line-height:1.6;

`

export const UlList = styled.div`
  display:grid;
  grid-template-columns: auto auto;
`


export const MyUl = styled.ul`
padding: 0;
list-style: none;
display: grid;
gap: 1rem;

`


type ListType = {
  color1?: string,
  color2?: string,
}

export const MyLi = styled.li<ListType>`
display:grid;
grid-template-columns: 1em auto;
font-size: 0.7em;
font-family: 'Roboto Mono', monospace;
&:before {
  content: "🔵";
  align-item:center;
  padding-top:2px;
  font-size: 3px;

  background: -webkit-linear-gradient(55deg,${props => props.color1?
  props.color1 : props.color} 50%, 
  ${props =>props.color2
  ?
  props.color2 : props.color
  } 50%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
};

`

export const Title =styled.h1`
  border:solid;
  width:20%;
  text-align:center;
  border-radius:5px;
`
