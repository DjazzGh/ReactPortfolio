function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card4.jpeg"></img>
        <h3>Designing Neuron: A medical platform</h3>
        <p>
        A medical platform focused on enhancing healthcare accessibility and efficiency. It provides intuitive UI/UX designs for seamless appointment scheduling, and medical record management. A smooth and reliable experience for both patients and healthcare professionals.
        </p>
        <button><a href="https://www.figma.com/design/0NWi4CR09F3swEo0SpP5th/Challenge-3?t=SYV0lt55an06re3D-0" target="_blank" >Figma link →</a></button>
        <div className="tech-icons">
          
          <span role="img" aria-label="TypeScript">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" alt="Flutter Logo" height="30px"/>
          </span>
          
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;