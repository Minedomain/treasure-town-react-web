import React, {useState, useRef} from 'react';
import { Nav, NavbarContainer, HomeTitle, Home, HomeDiv, TitleIcon, Hamburger, Menu, MenuLink } from './ElementsNavbar';
import {IMAGES} from '../../assets'


const Navbar = () => {
  const ref = useRef(null);

  // check width
  const [width, setWidth] = useState(window.innerWidth);
  const updateWindow = () => {
    setWidth(window.innerWidth)
  }

  return (
    <Nav>
      <NavbarContainer>
        {/* LEFT SIDE */}
        <HomeDiv>
          <Home to="/">
            <TitleIcon src={IMAGES.treasure_icon} alt="Treasure-Town"/>
            { width < 660 ? null :
            <HomeTitle>Treasure Town</HomeTitle>
            }
          </Home>
        </HomeDiv>
      </NavbarContainer>
      <Hamburger>

      </Hamburger>
      <Menu>
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/review">Documents</MenuLink>
          <MenuLink to="/blog">Roadmap</MenuLink>
          <MenuLink to="/forum">Whitepaper</MenuLink>
          <MenuLink to="/contact">Help</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar;