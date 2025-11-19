import camilo2 from "../assets/camilo2.png";
import camilo from "../assets/camilo.png";

const Header = () => {
  return (
    <header className="header-section">
      <div className="profile-container">
        <div data-aos="fade-right" className="profile-photo">
          <img className="photo" src={camilo} alt="foto" />
        </div>
        <div data-aos="fade-left" className="profile-info">
          <h1>Camilo Téllez</h1>
          <p>Sobre mi:</p>
          <p className="description">
            Desarrollador web con enfoque en frontend y bases sólidas en backend.
            He construido proyectos con Java, Spring Boot, JavaScript, Node.js, React y bases de datos como MySQL y PostgreSQL.
            <br/>
            Actualmente me preparo para mis prácticas con WinDev, mientras sigo fortaleciendo mi stack y mis habilidades en desarrollo web.
          </p>
          <a 
            href="/cv/HOJA_DE_VIDA.pdf"
            className="neon-button cv-button" 
            download
            rel="noopener noreferrer"
          >
            Hoja de vida
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;