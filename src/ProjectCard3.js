function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card3.jpeg"></img>
        <h3>Hotel Management App</h3>
        <p>
        Developed a hotel management system that processes 200+ bookings per month, applying Java OOP principles, MVC architecture, and designing an intuitive GUI.
        </p>
        <button><a href="https://drive.google.com/file/d/1eRXpY78DySlUhs1LJYksW4Jl7lClurW3/view?usp=sharing" target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          
          <span role="img" aria-label="TypeScript">
          <img src="https://img.icons8.com/?size=100&id=13679&format=png&color=000000" alt="Flutter Logo" height="30px"/>
          </span>
          
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;
