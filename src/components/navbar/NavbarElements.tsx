import styled from 'styled-components';



export const Container  = styled.div`
background-color: #080808;
position: fixed;
height:50px;
top: ${props => props.theme};
width: 90%;
transition: top 0.2s;
color:white;
display:flex;
justify-content: space-between;
align-items:center;
padding: 0.2rem calc((100vw - 1800px) / 2);
z-index: 10;
box-shadow: 0px 1px #181c1a;
`

export const SvgFrame = styled.div`
    opacity:0.5;
    &:hover {
        opacity:1;
    }
`
export const NavLinkBrand = styled.a`
    color: #000;
    opcity:0.5;
    display: flex;
    font-weight:700;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &: hover {
        opacity:1;
        color:black;
    }

    
`

export const BrandLabel = styled.h4`
    color:white;
    border: solid;
    padding: 5px;
    margin-top:8px;
`


export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display:NONE;
    }
`

export const NavBtnLink = styled.a`
    border-radius: 4px;
    background: #256ce1;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color:#BABABA;
        color: LiteBlue;
    }
`

export const NavLink = styled.a`
    color:white;
    opcity:0.5;
    display: flex;
    font-weight:700;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        color:#4554DA;
        // color: #457EDA;
    }
    &: hover {
        // color:#457EDA;
        color: LiteBlue;
    }
`