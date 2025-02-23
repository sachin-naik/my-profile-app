const Experince = () => {
  return (<>
    <section className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer - ABC Tech</h3>
          <p className="duration">Jan 2022 - Present</p>
          <ul>
            <li>Developed and maintained scalable web applications using React and Node.js.</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software solutions.</li>
            <li>Implemented RESTful APIs and integrated third-party services.</li>
          </ul>
        </div>
        <div className="experience-item">
          <h3>Frontend Developer - XYZ Solutions</h3>
          <p className="duration">Jun 2020 - Dec 2021</p>
          <ul>
            <li>Built responsive and user-friendly interfaces using React and Tailwind CSS.</li>
            <li>Optimized web applications for performance and accessibility.</li>
            <li>Worked closely with designers to implement UI/UX best practices.</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>E-Commerce Platform</h3>
          <p>
            A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, and payment integration.
          </p>
        </div>
        <div className="project-item">
          <h3>Task Management App</h3>
          <p>
            A task management application built with React and Firebase. Users can create, update, and delete tasks in real-time.
          </p>
          {/* <a href="https://github.com/sachin-naik/task-management-app" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a> */}
        </div>
        <div className="project-item">
          <h3>Portfolio Website</h3>
          <p>
            A personal portfolio website built with React and CSS. Showcases my skills, projects, and contact information.
          </p>
        </div>
      </section>
      </>
  );
}

export default Experince;
