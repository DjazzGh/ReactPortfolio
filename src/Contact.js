import React, { useEffect, useRef } from "react";


function Contact() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    const list = sectionRef.current.querySelector(".contact-list");
                    list.classList.add("revealed");
                    observer.unobserve(sectionRef.current);
                }
            },
            { threshold: 0.3 } // Trigger when 30% visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="contact" className="contact" ref={sectionRef}>
            <h2>Contact</h2>
            <p>Reach out to me</p>
            <div className="contact-container">
                <img
                    src="./contact2.png" // Replace with your image URL
                    alt="Profile"
                    className="contact-image"
                />
                <ul className="contact-list">
                    <li>
                        <span role="img" aria-label="Location">📍</span>
                        <strong>Location: </strong>Algiers, Algeria
                    </li>
                    <li>
                        <span role="img" aria-label="Email">✉️</span>
                        <strong>Email: </strong>djaziaghomari24@gmail.com
                    </li>
                    <li>
                        <span role="img" aria-label="Phone">📞</span>
                        <strong>Phone: </strong>+213 792240682
                    </li>
                    <li>
                        <span role="img" aria-label="LinkedIn">💼</span>
                        <a
                            href="https://www.linkedin.com/in/djazia-ghomari-6994842b9/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <span role="img" aria-label="GitHub">💻</span>
                        <a
                            href="https://github.com/DjazzGh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </li>
                </ul>
            </div>
            <div className="contact-form">
                <input
                    type="text"
                    className="contact-input"
                    placeholder="Send me a message"
                />
                <button className="contact-button">
                    <span role="img" aria-label="Arrow">➣</span>
                </button>
            </div>
          
        </section>
    );
}

export default Contact;