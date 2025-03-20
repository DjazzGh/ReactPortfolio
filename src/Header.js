import React, { useState } from 'react';

function Header() {
  const [isLightMode, setIsLightMode] = useState(false);

  const handleScroll = (id) => {
    console.log(`Attempting to scroll to ID: ${id}`);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${id} not found`);
    }
  };

  const toggleTheme = () => {
    setIsLightMode(prev => !prev);
    // Optional: Add to root element if Header isn't the top-level component
    document.documentElement.classList.toggle('light-mode');
  };

  return (
    <header className="header">
      <div className={isLightMode ? 'header-container light-mode' : 'header-container'}>
        <span className="logo"></span>
        <nav>
          <ul className="nav-list">
            <li onClick={() => handleScroll('about-me')}>About Me</li>
            <li onClick={() => handleScroll('skills')}>Skills</li>
            <li onClick={() => handleScroll('projects')}>Projects</li>
            <li onClick={() => handleScroll('contact')}>Contact</li>
          </ul>
        </nav>
        <span className="theme-toggle" onClick={toggleTheme}>
          <img 
            width="30" 
            height="30"  
            src="https://img.icons8.com/external-line-lima-studio/64/external-moon-basic-user-interface-line-lima-studio.png"
            style={{ filter: 'brightness(0) invert(1)' }}
            alt="theme-toggle"
          />
        </span>
      </div>
    </header>
  );
}

export default Header;