function ProjectCard() {
    return (
      <div className="project-card">
        <img className="project-img-placeholder" src="./card2.jpeg"></img>
        <h3>Real Time Chat App</h3>
        <p>
        A real-time chat application that enables users to exchange instant messages and monitor online statuses through a seamless, responsive interface. It incorporates secure user authentication, ensures reliable conversation flow, and implements comprehensive error handling on both client and server sides.
        </p>
        <button><a href="https://drive.google.com/file/d/1cIxcdBgj6uqjT2dYr4_cOmKuA8T9xDfn/view?usp=sharing" target="_blank" >Check Demo →</a></button>
        <div className="tech-icons">
          
          <span role="img" >
          <img src="https://runcode-app-public.s3.amazonaws.com/images/online-reactjs-editor-compiler.original.png" alt="ReactJS Logo" height="30px"/>
          </span>
        <span role="img" >
          <img src="https://w7.pngwing.com/pngs/293/485/png-transparent-tailwind-css-hd-logo.png" alt="ReactJS Logo" height="30px"/>
          </span>
          <span role="img" aria-label="Three.js">
          <img src="https://img.favpng.com/7/9/3/node-js-javascript-react-logo-express-js-png-favpng-GPD0rKMbRdWaq3cyiE1t3dSbw.jpg" alt="NodeJS Logo" height="30px"/>
          </span>
        <span role="img" aria-label="Three.js">
          <img src="https://w7.pngwing.com/pngs/956/695/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail.png" alt="MongoDB Logo" height="30px"/>
          </span>
          
         
        </div>
      </div>
    );
  }
  export default ProjectCard;
