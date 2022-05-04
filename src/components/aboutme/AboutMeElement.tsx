import styled from "styled-components";
import Avatar from '@mui/material/Avatar';

export const Container = styled.div`
    color:white;
    margin-top: 250px;   
`

export const CardFrame = styled.div`
    margin:auto;
    width: 50%;
    display:grid;
    grid-template-columns:50% 50%;
    justify-content:space-between;
    border:solid;
    min-width:400px;
    column-gap:10%;
    @media only screen and (max-width: 500px) {
        grid-template-columns:auto;
        justify-content:center;
      }

`

export const Card = styled.div``

export const MyAvatar =styled.img`
    max-width:80%;
    height:auto;
    border-radius: 10px;
`