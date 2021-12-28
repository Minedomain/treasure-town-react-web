import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button.js';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <img src='../../assets/img/toucan2 w stroke.png' style={{width:"70px", height:"70px", marginTop:"-1%"}}/>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/review'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Marketplace
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/blog'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Roadmap
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to={{ pathname: "https://imranbalunan12.gitbook.io/untitled/" }} target="_blank"
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Whitepaper
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Help
              </Link>
            </li>

            <li>
              <Link
                to={{ pathname: "https://treasure-town-webapp.herokuapp.com/" }} target="_blank"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Play Now
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Play Now</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
