function Hero() {
  const handleScroll = (id) => {
    console.log(`Attempting to scroll to ID: ${id}`); // Debug log
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Element with ID ${id} not found`);
    }
  };
    return (
      <section className="hero" id="hero">
        <div className="profile-container">
          <span role="img" aria-label="Profile" className="profile-img">
           <img src="./pic4.jpeg" width="100px" height="150px"/>
          </span>
        </div>
        <h1 className="typewriter">Ghomari Djazia</h1>
        <p>
        I am a Computer Science student with knowledge of web and app development and a passion for cybersecurity.
        </p>
        <div className="button-container">
          <button className="btn-primary" onClick={() => handleScroll('contact')}>Get In Touch</button>
          <a href="./cv.pdf" download="Ghomari_Djazia_CV.pdf">
          <button className="btn-secondary">Download CV</button></a>
        </div>
      </section>
    );
  }
  export default Hero;