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
    font-family: 'Raleway', sans-serif;
    font-family: 'Roboto Mono', monospace;
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
        // color: #40eb34;
    }
    &: hover {
        // color:#40eb34;
        color: #40eb34;
    }
`


export const Icon = () => {
    return <>
                <svg
   width="100px"
   height="130px"
   viewBox="0 0 400 250"
   version="1.1"
   id="svg13150"
   xmlns="http://www.w3.org/2000/svg">
  <defs
     id="defs13147">
    <linearGradient
       id="linearGradient13468">
      <stop
         style={{"stopColor":"#000000","stopOpacity":"1"}}
         offset="0"
         id="stop13466" />
    </linearGradient>
  </defs>
  <g
     id="layer1">
    <path
       d="m 103.60869,179.48287 v -78.96591 h 11.67508 v 32.15038 h 12.52417 v -32.15038 h 11.67511 v 78.96591 h -11.67511 v -35.53466 h -12.52417 v 35.53466 z m -43.091734,0 v -78.96591 h 17.831057 q 6.081668,0 10.038468,2.42309 a 12.897798,13.708487 0 0 1 3.016414,2.54047 14.894239,15.830413 0 0 1 3.229757,6.0059 q 0.7366,2.41298 0.98921,5.33923 a 32.976842,35.049596 0 0 1 0.13266,3.20715 v 39.93421 a 29.881879,31.7601 0 0 1 -0.42456,5.54114 q -0.50414,3.01761 -1.60586,5.40012 a 14.006933,14.887337 0 0 1 -2.321217,3.61102 13.724604,14.587264 0 0 1 -6.061501,3.9438 q -2.191732,0.73327 -4.846227,0.93855 a 29.494477,31.348351 0 0 1 -2.147156,0.0814 z m 11.675098,-11.28083 h 5.943688 q 2.593991,0 4.101145,-1.48005 a 4.8515332,5.1564755 0 0 0 0.303544,-0.32488 5.0064937,5.321176 0 0 0 0.953114,-1.71245 q 0.548732,-1.54323 0.583751,-3.83891 a 18.360681,19.514738 0 0 0 0.0018,-0.31463 v -41.06226 q 0,-4.0611 -1.538991,-5.86602 a 4.9852662,5.298614 0 0 0 -2.590812,-1.59177 q -0.816195,-0.20977 -1.783101,-0.21313 a 9.6691034,10.276851 0 0 0 -0.03089,0 h -5.943707 z"
       vector-effect="non-scaling-stroke"
       id="path13363"
       style={{"fontSize":"12px","fill":"#ffffff","fillRule":"evenodd","stroke":"none","strokeWidth":"1.03391243","strokeLinecap":"round","strokeMiterlimit":"4","strokeDasharray":"0, 11.37303677","strokeDashoffset":"0"}} />
    <rect
       style={{"fill":"none","fillRule":"evenodd", "strokeWidth":"0.264583"}}
       id="rect13396"
       width="103.28881"
       height="92.209381"
       x="57.898914"
       y="99.357407" />
    <rect
       style={{"fill":"none","fillOpacity":"1","fillRule":"evenodd","stroke":"#b3ffb5","strokeWidth":"3","strokeMiterlimit":"4","strokeDasharray":"none","strokeOpacity":"1"}}
       id="rect13420"
       width="87.346001"
       height="87.346306"
       x="56.326843"
       y="96.326843"
       ry="0" />
  </g>
</svg>
    </>
}