function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-mobile-placeholder" src="./card6.jpeg"></img>
        <h3>Recipe App </h3>
        <p>
        Developed a mobile recipe app using Flutter and SQLite, enabling users to browse and save over 50 recipes, implementing state management for smooth navigation.
        </p>
        <button><a href="https://drive.google.com/file/d/1U3WdxEE9ybhgYlJ302uFvOCK-LAsOWjT/view?usp=sharing" target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          
          <span role="img" aria-label="TypeScript">
          <img src="https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;