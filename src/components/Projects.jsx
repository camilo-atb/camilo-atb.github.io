const Projects = () => (
  <section data-aos="zoom-in" className="section projects-section">
    <div className='contenedorTitle'>
      <h2>Conoce mis proyectos</h2>
    </div>
    <div className="project-links">
      <a 
        href="https://github.com/camilo-atb" 
        className="project-link github-link"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img className="images_projects" src="/logos/github.png" alt="logo github" />
      </a>
      <a 
        href="http://www.linkedin.com/in/camilo-téllez" 
        className="project-link linkedin-link"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <img className="images_projects" src="/logos/linkedin.png" alt="logo linckedin" />
      </a>
    </div>
  </section>
);

export default Projects