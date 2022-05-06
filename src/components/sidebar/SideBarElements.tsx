import styled from 'styled-components';
import {ImGithub} from 'react-icons/im';
import {MdEmail} from 'react-icons/md';
import { ImLinkedin } from 'react-icons/im';
import {FiInstagram} from 'react-icons/fi';
import {RiInstagramFill} from 'react-icons/ri';
import {FaTwitter} from 'react-icons/fa';
export const Container = styled.div`
    background:transparent;
    height:100%;
    position:fixed;
    left:0;
    top:0;
    
    @media only screen and (max-width: 900px) {
        position:relative;
        margin-top:100px;
        width:100%;
    }

`


export const ButtonArea = styled.div`
margin-top:450px;
@media only screen and (max-width: 900px) {
    margin-top:0px;
}
`

export const ButtonGroup = styled.div`
    display: grid;
    width:200px;
    grid-template-columns: auto;
    row-gap:50px;

    @media only screen and (max-width: 900px) {
        grid-template-columns: auto auto auto auto auto;
        margin:auto;
        width:60%;
        padding-bottom:50px;
    }

`
export const GithubBtn = styled(ImGithub)`
color:white;
margin:auto;
opacity: 0.5;
position:relative;
bottom:0px;
transition: 0.5s;

`

export const EmailBtn = styled(MdEmail)`
color:white;
margin:auto;
opacity:0.5;
position:relative;
bottom:0px;
transition: 0.5s;
left:0px;
`

export const LinkedinBtn = styled(ImLinkedin)`
    color:white;
    margin:auto;
    opacity: 0.5;
    position:relative;
bottom:0px;
transition: 0.5s;
left:0px;
`

export const IgBtn = styled(RiInstagramFill)`
    color:white;
    margin:auto;
    opacity:0.5;
    position:relative;
    bottom:0px;
    transition: 0.5s;
    left:0px;
`

export const TwitterBtn = styled(FaTwitter)`
    color:white;
    margin:auto;
    opacity:0.5;
    position:relative;
    bottom:0px;
    transition: 0.5s;
    width:100%;
    left:0px;
`

export const MyLink = styled.a`
    margin:auto;
    
    & : hover {
        opacity:1;
        bottom: 10px;
        left:5px;

    }
`
