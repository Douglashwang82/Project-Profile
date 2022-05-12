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
grid-template-columns:1fr 1fr;
justify-content:space-between;

min-width:300px;
margin:1px;
column-gap: 5%;
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
border-radius: 5%;
border: solid;
color:white;
padding:10px;
position: relative;

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

padding:10px;
`

export const ImgSection = styled.div`
filter: brightness(0.4);
transition: 1s;
position: relative;
margin:auto;
&:hover{
  filter: none;
  z-index:3;
}

// &:hover ~ #b{
  
//   background:pink;
// }

@media only screen and (max-width: 1000px) {
  display:none;
}
`


export const TextTitle = styled.h2`
font-family: 'Raleway', sans-serif;
padding-left:5%;
`
export const TextIntro= styled.text`
background:#1d1f1d;
`

export const TechStack = styled.div`
padding-left:5%;
font-family: 'Roboto Mono', monospace;
`

export const MyUl = styled.ul`
  display:grid;
  grid-template: "auto auto auto";
  font-size: 0.8em;
  padding-left:0;
  list-style: none;
  row-gap:5px;
`

export const MyLi = styled.li`
`


export const TextIntroFrame = styled.div`
background:#1d1f1d;
padding:5%;
line-height:1.5rem;

font-family: 'Roboto Mono', monospace;
color:#c1d4c1;
`