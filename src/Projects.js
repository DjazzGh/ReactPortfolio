import { useState } from 'react';
import ProjectCard from './ProjectCard.js';

const projectData = [
  {
    category: 'Web Development',
    imageSrc: './card1.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Travel planning website',
    description: 'Developed a dynamic travel planning website that allows users to create personalized travel itineraries by inputting details . Designed an intuitive user interface to enhance user experience and implemented robust backend functionality to store and manage user-generated travel plans efficiently.',
    buttonLink: 'https://drive.google.com/file/d/1VHwEfO7pJmCgP32RBunJhnId59jfu1io/view?usp=sharing',
    buttonText: 'Check Demo →',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000', alt: 'React Logo', label: 'React' },
      { src: 'https://img.icons8.com/?size=100&id=21278&format=png&color=000000', alt: 'TypeScript Logo', label: 'TypeScript' },
      { src: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000', alt: 'Three.js Logo', label: 'Three.js' },
      { src: 'https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000', alt: 'Redux Logo', label: 'Redux' },
      { src: 'https://img.icons8.com/?size=100&id=fAMVO_fuoOuC&format=png&color=000000', alt: 'Firebase Logo', label: 'Firebase' },
    ],
  },
  {
    category: 'Web Development',
    imageSrc: './card2.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Real Time Chat App',
    description: 'A real-time chat application that enables users to exchange instant messages and monitor online statuses through a seamless, responsive interface. It incorporates secure user authentication, ensures reliable conversation flow, and implements comprehensive error handling on both client and server sides.',
    buttonLink: 'https://drive.google.com/file/d/1idylEldU17gS_Z220VQiVElw0L5MPkDO/view?usp=sharing',
    buttonText: 'Check Demo →',
    techIcons: [
      { src: 'https://runcode-app-public.s3.amazonaws.com/images/online-reactjs-editor-compiler.original.png', alt: 'ReactJS Logo', label: 'ReactJS' },
      { src: 'https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000', alt: 'Tailwind Logo', label: 'Tailwind' },
      { src: 'https://img.icons8.com/?size=100&id=54087&format=png&color=000000', alt: 'NodeJS Logo', label: 'NodeJS' },
      { src: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000', alt: 'MongoDB Logo', label: 'MongoDB' },
    ],
  },
  {
    category: 'Other languages',
    imageSrc: './card3.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Hotel Management App',
    description: 'Developed a hotel management system that processes 200+ bookings per month, applying Java OOP principles, MVC architecture, and designing an intuitive GUI.',
    buttonLink: 'https://drive.google.com/file/d/1eRXpY78DySlUhs1LJYksW4Jl7lClurW3/view?usp=sharing',
    buttonText: 'Check Demo →',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=13679&format=png&color=000000', alt: 'Java Logo', label: 'Java' },
    ],
  },
  {
    category: 'UIUX',
    imageSrc: './card4.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'Designing Neuron: A medical platform',
    description: 'A medical platform focused on enhancing healthcare accessibility and efficiency. It provides intuitive UI/UX designs for seamless appointment scheduling, and medical record management. A smooth and reliable experience for both patients and healthcare professionals.',
    buttonLink: 'https://www.figma.com/design/0NWi4CR09F3swEo0SpP5th/Challenge-3?t=SYV0lt55an06re3D-0',
    buttonText: 'Figma link →',
    techIcons: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma Logo', label: 'Figma' },
    ],
  },
  {
    category: 'UIUX',
    imageSrc: './card5.jpeg',
    imageClass: 'project-img-mobile-placeholder',
    title: 'Redesigning Progres app',
    description: "Enhancing the UI/UX of Algeria's student portal for improved accessibility and usability. The redesign focused on creating a modern, intuitive interface that simplifies grade tracking, schedule management, and academic services.",
    buttonLink: 'https://www.figma.com/design/dtFJIsFD9ktKJuBg08XlF8/Untitled?node-id=1-4&t=tkK39qZabiGiRxG2-1',
    buttonText: 'Figma link →',
    techIcons: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg', alt: 'Figma Logo', label: 'Figma' },
    ],
  },
  {
    category: 'Mobile Development',
    imageSrc: './card6.jpeg',
    imageClass: 'project-img-mobile-placeholder',
    title: 'Recipe App',
    description: 'Developed a mobile recipe app using Flutter and SQLite, enabling users to browse and save over 50 recipes, implementing state management for smooth navigation.',
    buttonLink: 'https://drive.google.com/file/d/1U3WdxEE9ybhgYlJ302uFvOCK-LAsOWjT/view?usp=sharing',
    buttonText: 'Check Demo →',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000', alt: 'Flutter Logo', label: 'Flutter' },
    ],
  },
  {
    category: 'Other languages',
    imageSrc: './card7.jpeg',
    imageClass: 'project-img-placeholder',
    title: 'QCS Console Game',
    description: 'This project is a console-based QCM Application that provides users with the ability to log in, choose qcm categories, answer questions with a timer, and track their qcm history.',
    buttonLink: 'https://www.youtube.com/watch?v=d8t6BRGSa6A&ab_channel=Chaima',
    buttonText: 'Check Demo →',
    techIcons: [
      { src: 'https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000', alt: 'C++ Logo', label: 'C++' },
    ],
  },
];

function Projects() {
    const [activeFilter, setActiveFilter] = useState('Web Development');

    const handleFilterClick = (filter) => {
        setActiveFilter(filter);
    };

  const categories = [
    { key: 'UIUX', label: 'UI/UX' },
    { key: 'Web Development', label: 'Web Development' },
    { key: 'Mobile Development', label: 'Mobile Development' },
    { key: 'Other languages', label: 'Other languages' },
  ];

    return (
        <section className="projects" id="projects">
            <h2>My Projects</h2>
            <div className="filter-buttons">
        {categories.map((cat) => (
                <button 
            key={cat.key}
            className={`filter-btn ${activeFilter === cat.key ? 'filter-btn-active' : ''}`}
            onClick={() => handleFilterClick(cat.key)}
                >
            {cat.label}
                </button>
        ))}
            </div>
            <div className="project-card-container" style={{ gap: '1.5rem' }}>
        {categories.map((cat) => (
          <div
            key={cat.key}
            className={`${cat.key.replace(/\s/g, '')}-Projects`}
            style={{ display: activeFilter === cat.key ? 'flex' : 'none' }}
          >
            {projectData
              .filter((proj) => proj.category === cat.key)
              .map((proj, idx) => (
                <ProjectCard key={proj.title + idx} {...proj} />
              ))}
                </div>
        ))}
            </div>
        </section>
    );
}

export default Projects;