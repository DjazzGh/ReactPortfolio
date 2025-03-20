function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card7.jpeg"></img>
        <h3>QCS Console Game</h3>
        <p>
        This project is a console-based QCM Application that provides users with the ability to log in, choose qcm categories, answer questions with a timer, and track their qcm history.
        </p>
        <button><a href="https://www.youtube.com/watch?v=d8t6BRGSa6A&ab_channel=Chaima " target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          
          <span role="img" aria-label="TypeScript">
          <img src="https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
         
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;