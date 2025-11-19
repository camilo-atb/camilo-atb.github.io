import Header from './Header';
import Technologies from './Technologies';
import Education from './Education';
import Certifications from './Certifications';
import Recognitions from './Recognitions';
import Projects from './Projects';
import "./styles/portfolio.css"

function Portfolio() {
  return (
    <div className="portfolio-container">
      <Header />
      <Technologies />
      <Education />
      <Certifications />
      <Recognitions />
      <Projects />
    </div>
  );
}

export default Portfolio;