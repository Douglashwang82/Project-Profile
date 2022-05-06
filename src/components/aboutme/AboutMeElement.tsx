import styled, {keyframes} from "styled-components";
import Avatar from '@mui/material/Avatar';


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
    // #show{
    // margin:auto;
    // width: 50%;
    // display: grid;
    // grid-template-columns:50% 50%;
    // justify-content:space-between;
    // border:solid;
    // min-width:400px;
    // column-gap:10%;
    // @media only screen and (max-width: 500px) {
    //     grid-template-columns:auto;
    //     justify-content:center;
    //   }

    //   animation: ${myFade} 4s linear forwards; 
    // }
    // #hidden{
    //     display:none;
    // }
`

export const CardFrame = styled.div<{ theme:string}>`

    
    margin:auto;
    width: 50%;
    display: grid;
    grid-template-columns:50% 50%;
    justify-content:space-between;
    border:solid;
    min-width:400px;
    column-gap:10%;
    @media only screen and (max-width: 500px) {
        grid-template-columns:auto;
        justify-content:center;
      }

      animation: ${myFade} 4s linear forwards; 

`

export const Card = styled.div``

export const MyAvatar =styled.img`
    max-width:80%;
    height:auto;
    border-radius: 10px;
    @media only screen and (max-width: 500px) {
        width:300px;
      }
`