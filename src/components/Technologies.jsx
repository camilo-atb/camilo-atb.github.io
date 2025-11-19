const techLogos = [
  'html', 'css', 'javascript', 'java', 'python', 'springboot',
  'react', 'nodejs', 'windev', 'git', 'postgres', 'mysql'
];

const Technologies = () => {
  return (
    <section data-aos="zoom-in" className="section technologies-section">
      <div className='contenedorTitle'>
        <h2>Tecnologías</h2>
      </div>
      
      <div className="tech-carousel-container">
        <div className="tech-carousel-track">
          {Array(2).fill(techLogos).flat().map((tech, index) => (
            <div key={index} className="tech-logo-item">
              <img 
                src={`/logos/${tech}.png`}
                alt={tech} 
                className="tech-logo"
                title={tech.toUpperCase()}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;