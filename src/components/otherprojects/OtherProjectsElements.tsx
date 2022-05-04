import styled from 'styled-components';

export const Container = styled.div`
    height:500px;
    color:white;
    
    margin-top:300px;
    background: radial-gradient(circle at -26% -36%, purple, darkblue);
`
export const ProjectArea = styled.div`
    margin:auto;
    width:50%;
`
export const ProjectFrame = styled.div`
    display:grid;
    grid-template-columns:auto auto auto;
    column-gap:10px;
    row-gap:10px;
`
export const NameCard = styled.div`
    border-bottom-right-radius:10px;
    border-bottom-left-radius:5px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    // glass effect ...
    background-color: rgba(255, 255, 255, .15);  
    backdrop-filter: blur(5px);
    width:300px;
    height:200px;
    `