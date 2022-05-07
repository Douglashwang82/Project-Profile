import React, { useEffect, useState } from 'react';
import { FaWindows } from 'react-icons/fa';
import {
    Container,
    NavLinkBrand,
    BrandLabel,
    NavMenu,
    NavLink,
    SvgFrame,
    Icon
} from './NavbarElements';


export const Navbar: React.FC = () => {
    const [scrollUp, setScrollUp] = useState<boolean>(true);

    useEffect(() => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setScrollUp(true);
            } else {
                setScrollUp(false);
            }
            prevScrollpos = currentScrollPos;
        }
    });
    return (
        <>
            <Container theme={scrollUp ? "0px" : "-50px"}>
                <NavLinkBrand href="#home">
                    <SvgFrame>
                        <   Icon /></SvgFrame>
                </NavLinkBrand>

                <NavMenu>
                    <NavLink href='#about'>
                        About
                    </NavLink>
                    <NavLink href='#featured' >
                        Featured Work
                    </NavLink>
                    <NavLink href='#featured' >
                        Projects
                    </NavLink>
                    <NavLink href='#contact'>
                        Contact
                    </NavLink>
                    {/* <NavLink to='/sign-up'>
                    Sign Up
                </NavLink> */}
                </NavMenu>
                {/* <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn> */}

            </Container>
        </>
    );
}