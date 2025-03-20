import { useState } from 'react';
import ProjectCard from './ProjectCard.js';
import ProjectCard2 from './ProjectCard2.js';
import ProjectCard3 from './ProjectCard3.js';
import ProjectCard4 from './ProjectCard4.js';
import ProjectCard5 from './ProjectCard5.js';
import ProjectCard6 from './ProjectCard6.js';
import ProjectCard7 from './ProjectCard7.js';

function Projects() {
    const [activeFilter, setActiveFilter] = useState('Web Development');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="filter-buttons">
                <button 
                    className={`filter-btn ${activeFilter === 'UI/UX' ? 'filter-btn-active' : ''}`}
                    onClick={() => handleFilterClick('UI/UX')}
                >
                    UI/UX
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'Web Development' ? 'filter-btn-active' : ''}`}
                    onClick={() => handleFilterClick('Web Development')}
                >
                    Web Development
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'Mobile Development' ? 'filter-btn-active' : ''}`}
                    onClick={() => handleFilterClick('Mobile Development')}
                >
                    Mobile Development
                </button>
                <button 
                    className={`filter-btn ${activeFilter === 'Other languages' ? 'filter-btn-active' : ''}`}
                    onClick={() => handleFilterClick('Other languages')}
                >
                    Other languages
                </button>
            </div>
            <div className="project-card-container">
                <div 
                    className="UIUX-Projects"
                    style={{ display: activeFilter === 'UI/UX' ? 'flex' : 'none' }}
                >
                    <ProjectCard4 />
                    <ProjectCard5 />
                </div>
                <div 
                    className="WebDev-Projects"
                    style={{ display: activeFilter === 'Web Development' ? 'flex' : 'none' }}
                >
                    <ProjectCard />
                    <ProjectCard2 />
                </div>
                <div 
                    className="MobileDev-Projects"
                    style={{ display: activeFilter === 'Mobile Development' ? 'flex' : 'none' }}
                >
                  <ProjectCard6 />
                </div>
                <div 
                    className="Languages-Projects"
                    style={{ display: activeFilter === 'Other languages' ? 'flex' : 'none' }}
                >
                    <ProjectCard3 />
                    <ProjectCard7 />
                   
                </div>
            </div>
        </section>
    );
}

export default Projects;