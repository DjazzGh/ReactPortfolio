function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card2.jpeg"></img>
        <h3>Real Time Chat App</h3>
        <p>
        A real-time chat application that enables users to exchange instant messages and monitor online statuses through a seamless, responsive interface. It incorporates secure user authentication, ensures reliable conversation flow, and implements comprehensive error handling on both client and server sides.
        </p>
        <button><a href="https://drive.google.com/file/d/1idylEldU17gS_Z220VQiVElw0L5MPkDO/view?usp=sharing" target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          
          <span role="img" >
          <img src="https://runcode-app-public.s3.amazonaws.com/images/online-reactjs-editor-compiler.original.png" alt="ReactJS Logo" height="30px"/>
          </span>
        <span role="img" >
          <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" alt="Tailwind Logo" height="30px"/>
          </span>
          <span role="img" aria-label="Three.js">
          <img src="https://img.icons8.com/?size=100&id=54087&format=png&color=000000" alt="NodeJS Logo" height="30px"/>
          </span>
        <span role="img" aria-label="Three.js">
          <img src="https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000" alt="MongoDB Logo" height="30px"/>
          </span>
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;
