function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card2.jpeg"></img>
        <h3>To do list Website</h3>
        <p>
        A sleek, user-friendly to-do list web application. Features include task creation, deletion, and status tracking, with a clean interface designed for efficient task management and productivity
        </p>
        <button><a href="https://drive.google.com/file/d/1cIxcdBgj6uqjT2dYr4_cOmKuA8T9xDfn/view?usp=sharing" target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          
          <span role="img" aria-label="TypeScript">
          <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          <span role="img" aria-label="Three.js">
          <img src="https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;
