import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu
} from 'utilities/styledComponent';


const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/region' activeStyle>
                Region
          </NavLink>
          <NavLink to='/items' activeStyle>
                Items
          </NavLink>
          <NavLink to='/generation' activeStyle>
                Generation
          </NavLink>
          <NavLink to='/my-pokemon' activeStyle>
                My Pokemon 
          </NavLink>
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;