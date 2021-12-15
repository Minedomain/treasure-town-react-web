import React, {useState, useRef} from 'react';
import { Nav, TitleIcon, Hamburger, Menu, MenuLink } from './ElementsNavbar';
import {IMAGES} from '../../assets'


const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  // check width
  const [width, setWidth] = useState(window.innerWidth);
  const updateWindow = () => {
    setWidth(window.innerWidth)
  }

  return (
    <Nav>
<<<<<<< Updated upstream
      <TitleIcon src={IMAGES.toucan_icon} alt="Treasure-Town"/>
      <Hamburger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      
      <Menu isOpen={isOpen}>
      
          <MenuLink to="/">Home</MenuLink>
          <MenuLink to="/review">Marketplace</MenuLink>
          <MenuLink to="/blog">Roadmap</MenuLink>
          <MenuLink to="/forum">Whitepaper</MenuLink>
          <MenuLink to="/contact">Help</MenuLink>
=======
      <NavbarContainer>
        {/* LEFT SIDE */}
        <HomeDiv>
          <Home to="/">
            <TitleIcon src={IMAGES.treasure_icon} alt="Treasure-Town"/>
            { width < 660 ? null :
            <HomeTitle style={{fontFamily: "PirateTreasure"}}>Treasure Town</HomeTitle>
            }
          </Home>
        </HomeDiv>
      </NavbarContainer>
      <Hamburger>

      </Hamburger>
      <Menu>
          <MenuLink to="/" style={{fontFamily: "PirateTreasure"}}>Home</MenuLink>
          <MenuLink to="/review" style={{fontFamily: "PirateTreasure"}}>Marketplace</MenuLink>
          <MenuLink to="/blog" style={{fontFamily: "PirateTreasure"}}>Roadmap</MenuLink>
          <MenuLink to="/forum" style={{fontFamily: "PirateTreasure"}}>Whitepaper</MenuLink>
          <MenuLink to="/contact" style={{fontFamily: "PirateTreasure"}}>Help</MenuLink>
>>>>>>> Stashed changes
      </Menu>
    </Nav>
  );
}

export default Navbar;