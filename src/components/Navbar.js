import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import './App.css';
import { strapButton, Container, InputGroup } from 'reactstrap';
import { ThemeContext, themes } from './dark mode/themeContext';

function Navbar() {
  const [darkMode, setDarkMode] = React.useState(true);

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

      {/* <header className="App-header">
        <h1 className="text-warning">Dark/Light mode</h1>
        <InputGroup>
          <ThemeContext.Consumer>
            {({ changeTheme }) => (
              <strapButton
                color="link"
                onClick={() => {
                  setDarkMode(!darkMode);
                  changeTheme(darkMode ? themes.light : themes.dark);
                }}
              >
                <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
                <span className="d-lg-none d-md-block">Switch mode</span>
              </strapButton>
            )}
          </ThemeContext.Consumer>
        </InputGroup> 
      </header> */}

        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Hi, I'm Tameem
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li> */}
            <li className='nav-item'>
              <Link
                to='/experience'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Experience
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/education'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Education
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/light-mode'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Light Mode
              </Link>
            </li>
            {/* <li>
              <Link
                to='/home-light'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Light Mode
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Light Mode</Button>} */}
        </div>
      </nav>
    </>
    
  );
}

export default Navbar;
