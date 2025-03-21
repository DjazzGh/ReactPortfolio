function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card1.jpeg" ></img>
        <h3>Travel planning website</h3>
        <p>
        Developed a dynamic travel planning website that allows users to create personalized travel itineraries by inputting details . Designed an intuitive user interface to enhance user experience and implemented robust backend functionality to store and manage user-generated travel plans efficiently.
        </p>
        <button ><a href="https://drive.google.com/file/d/1VHwEfO7pJmCgP32RBunJhnId59jfu1io/view?usp=sharing" target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          <span role="img" aria-label="React">
          <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          <span role="img" aria-label="TypeScript">
          <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          <span role="img" aria-label="Three.js">
          <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          <span role="img" aria-label="Three.js">
          <img src="https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          <span role="img" aria-label="Three.js">
          <img src="https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
        </div>
      </div>
    );
  }
  export default ProjectCard;