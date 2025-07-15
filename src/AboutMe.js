import React, { useEffect, useRef } from "react";


function AboutMe() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    const cards = sectionRef.current.querySelectorAll(".card");
                    cards.forEach((card) => card.classList.add("revealed"));
                    observer.unobserve(sectionRef.current); // Stop observing after reveal
                }
            },
            {
                threshold: 1, // Trigger when 30% of the section is visible
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []); // Runs once on mount

    return (
        <section className="about-me" id="about-me" ref={sectionRef}>
            <h2>About Me</h2>
            <p id="littletext"> Get to know me</p>
            <div className="card-container">
                <div className="card">
                    <span role="img" aria-label="Analytics" className="card-icon">
                        📚
                    </span>
                    <h3>Education</h3>
<p>
  <span className="education-item">
    <img 
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaU39ZC57_1XiEuohglr-IiLYlfXKK3-9SOg&s" 
      height="40" 
      width="40" 
      alt="University Icon" 
    />
    <span className="education-details">
      Computer Science Student<br />
      2022 - Present<br />
      Specialty: Cybersecurity
    </span>
  </span>
</p>
                </div>
                <div className="card">
                    <span role="img" aria-label="Forecast" className="card-icon">
                        👩🏻‍💻
                    </span>
                    <h3>Fields of Interest</h3>
                    <p>
                        <ul>
                          <li>Web Development</li>
                          <li>UI UX Design</li>
                          <li>Cybersecurity</li>
                          <li>AI</li>
                          <li>Mobile Development</li>
                        </ul>
                    </p>
                </div>
                <div className="card">
                    <span role="img" aria-label="NLP" className="card-icon">
                        🔎
                    </span>
                    <h3>What I am looking for</h3>
                    <p>
                        <ul>
                          <li>Internships</li>
                          <li>Freelance opportunities</li>
                          <li>Part time jobs</li>
                        </ul>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;