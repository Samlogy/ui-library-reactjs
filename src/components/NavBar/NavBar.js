import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { BsMoon, BsSun } from 'react-icons/bs';

import useDarkMode from './useDarkMode';
import './style.css';

const NavBar = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(true);
  // Dark Mode
  const [theme, setTheme] = useDarkMode();

  const navBarData = [
    { link: '/', linkName: 'Home' },
    { link: '#about', linkName: 'About' },
    { link: '/blog', linkName: 'Blog' },
    { link: '/contact', linkName: 'Contact' }
  ];

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) setButton(false);
     else setButton(true);
  };

  useEffect(() => { showButton() }, []);

  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 80) setNavbar(true);
    else setNavbar(false);
  };
  
  window.addEventListener('scroll', changeBackground);
//{navbar ? 'navbar active' : 'navbar'}
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
              <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                <MdFingerprint className='navbar-icon' /> Logo
              </Link>

              <div className='menu-icon' onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>

              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                { navBarData.map((el, index) => 
                  <li className='nav-item' key={index}>
                    <Link to={el.link} className='nav-links' onClick={closeMobileMenu}>
                        { el.linkName }
                    </Link>
                  </li> )}
              </ul>

              <ul className={click ? 'nav-menu-mode active' : 'nav-menu-mode'}>
                <div className="toggle-container">
                  <BsSun className="icon-sun" />
                  <input type="checkbox" id="switch" name="theme" onChange={setTheme} checked={theme.active}/> 
                  <label htmlFor="switch"></label> 
                  <BsMoon className="icon-moon" />
                </div>
              </ul>
              
              <ul className={click ? 'nav-menu-auth active' : 'nav-menu-auth'}>
                <li className='nav-btn'>
                  <Link to='/login' className='btn-link'>          
                    <button type='button' onClick={closeMobileMenu} className='btn btn-info'>
                        Log In
                    </button> 
                  </Link>
                </li>

                <li className='nav-btn'>
                    <Link to='/register' className='btn-link'>
                      <button type='button' onClick={closeMobileMenu} className='btn'>
                        Sign Up
                      </button> 
                    </Link>
                </li>
              </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;