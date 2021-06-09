import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    NavLogo
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />

                <NavMenu>
                    <NavLink to='/' activeStyle>
                        Home
                    </NavLink>
                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/team' activeStyle>
                        Teams
                    </NavLink>
                </NavMenu>
                {/*<NavBtn>*/}
                {/*    <NavBtnLink to='/signin'>Sign In</NavBtnLink>*/}
                {/*</NavBtn>*/}
            </Nav>
        </>
    );
};

export default Navbar;
