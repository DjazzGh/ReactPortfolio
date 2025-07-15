import React, { useRef } from 'react';

function Skills() {
  const sliderRef = useRef();

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'paused';
    }
  };
  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.style.animationPlayState = 'running';
    }
  };

  // Skill cards array for easy duplication
  const skillCards = [
    <div className="skill-card" key="frontend">
      <h3>Frontend web developement</h3>
      <div className="publications-icons">
        <ul> 
          <li><span role="img"><img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="HTML" height="30px"/></span> HTML</li>
          <li><span role="img"><img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="CSS" height="30px"/></span> CSS</li>
          <li><span role="img"><img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="JavaScript" height="30px"/></span> JavaScript</li>
          <li><span role="img"><img src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="React js" height="30px"/></span> React js</li>
          <li><span role="img"><img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind CSS" height="30px"/></span> Tailwind CSS</li>
          
        </ul>
      </div>
    </div>,
    <div className="skill-card" key="backend">
      <h3>Backend web developement</h3>
      <ul>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" alt="NodeJS" height="30px"/></span> NodeJS</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000" alt="ExpressJS" height="30px"/></span> ExpressJS</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="MySql" height="30px"/></span> MySql</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="Mongo DB" height="30px"/></span> Mongo DB</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="PHP" height="30px"/></span> PHP</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000" alt="Next js" height="30px"/></span> Next JS</li>

      </ul>
    </div>,
    <div className="skill-card" key="prog">
      <h3>Programming Languages</h3>
      <ul>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Python" height="30px"/></span> Python</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Java" height="30px"/></span> Java</li>
        <li><span role="img"><img src="./c.svg" alt="C" height="30px"/></span> C</li>
      </ul>
    </div>,
    <div className="skill-card" key="tools">
      <h3>Tools</h3>
      <ul>
      <li><span role="img"><img src="https://img.icons8.com/?size=100&id=20906&format=png&color=000000" alt="Git" height="30px"/></span> Git</li>
        <li><span role="img"><img src="https://img.icons8.com/?size=100&id=12599&format=png&color=000000" alt="GitHub" height="30px"/></span> GitHub</li>
        <li><span role="img" aria-label="Nginx"><img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Figma" height="30px"/></span> Figma</li>
        <li><span role="img" aria-label="Docker">🐳</span> Docker</li>
      </ul>
    </div>,
    <div className="skill-card" key="langs">
      <h3>Languages</h3>
      <ul>
        <li><span role="img" aria-label="English">🇬🇧</span> English</li>
        <li><span role="img" aria-label="French">🇫🇷</span> French</li>
        <li><span role="img" aria-label="Arabic">🇩🇿</span> Arabic</li>
      </ul>
    </div>
  ];

  // Duplicate the cards for seamless looping
  const allCards = [...skillCards, ...skillCards];

  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>
      <div
        className="skill-slider-row"
        ref={sliderRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {allCards}
      </div>
    </section>
  );
}

export default Skills;
