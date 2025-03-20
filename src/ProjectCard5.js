function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-mobile-placeholder" src="./card5.jpeg" width="8%"></img>
        <h3>Redesigning Progres app</h3>
        <p>
        Enhancing the UI/UX of Algeria's student portal for improved accessibility and usability. The redesign focused on creating a modern, intuitive interface that simplifies grade tracking, schedule management, and academic services. 
        </p>
        <button><a href="https://www.figma.com/design/dtFJIsFD9ktKJuBg08XlF8/Untitled?node-id=1-4&t=tkK39qZabiGiRxG2-1" target="_blank" >Figma link →</a></button>
        <div className="tech-icons">
          
          <span role="img" aria-label="TypeScript">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Flutter Logo" height="30px"/>
          </span>
          
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;