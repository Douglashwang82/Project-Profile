import styled, {keyframes} from 'styled-components';


const myFade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 100;
  }
`

export const Container = styled.div`
color:white;
// margin-top:200px;
`

export const ProjectsFrame = styled.div`    
    margin:auto;
    width:50%;
    min-width:400px;
`
export const HiddenBoarder = styled.div`
// max-width: 250px;
padding: 1rem;
position: relative;
background: linear-gradient(to right, red, purple);
padding: 3px;
border-radius: 5px;
`
export const ProjectCard = styled.div`
margin:auto;
// width: 50%;
display:grid;
grid-template-columns:50% 50%;
justify-content:space-between;
min-width:300px;
margin:1px;
border-radius: 10px;
// @media only screen and (max-width: 500px) {
//     grid-template-columns:auto;
//     justify-content:center;
//   }
@media only screen and (max-width: 1000px) {
  grid-template-columns:auto;
  justify-content:center;
}
`


export const ProjectImg = styled.img`
width:80%;
min-width:390px;
height:auto;
border-radius: 10px;
`

export const Title =styled.h1`
  border:solid;
  width:37%;
  text-align:center;
  border-radius:5px;
`


export const TitleFrame = styled.div`
width:50%;
margin:auto;
font-family: 'Raleway', sans-serif;
`

export const TextSection = styled.div`
background:grey;
position:absolute;
width:20%;
z-index:2;

right:35%;
top: 10em;

`

export const ImgSection = styled.div`
filter: brightness(0.4);
position:absolute;
width:30%;
z-index:1;
left:30%;
transition: 1s;
&:hover{
  filter: none;
  z-index:3;
}

&:hover ~ #b{
  
  background:pink;
}
`