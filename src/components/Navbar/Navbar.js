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
      </Menu>
    </Nav>
  );
}

export default Navbar;