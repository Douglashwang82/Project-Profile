import styled from 'styled-components';

export const Container = styled.div`
    color:white;
    // margin-top:200px;
    // background: radial-gradient(circle at -26% -36%, purple, darkblue);
`
export const ProjectArea = styled.div`
    margin:auto;
    width:50%;
    min-width:800px;
    border:solid;
    border-color:yellow;
    @media only screen and (max-width: 900px) {
        min-width:480px;
    }
`

export const ProjectFrame = styled.div`
    border:solid;
    border-color:yellow;
    display:grid;
    row-gap:10px;
    column-gap:5%;
    min-width:700px;
    grid-template-columns: 30% 30% 30%;
    @media only screen and (max-width: 900px) {
        grid-template-columns:auto;
        column-gap:0;
        min-width:80%;
      }
`
export const NameCard = styled.div`
    border-bottom-right-radius:10px;
    border-bottom-left-radius:5px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;

    // glass effect ...
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    height:auto;

    `