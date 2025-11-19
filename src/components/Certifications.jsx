import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const certificatesData = [
  { id: 1, source: "https://ik.imagekit.io/camilo25images/5APEX.jpg"},
  { id: 2, source: "https://ik.imagekit.io/camilo25images/4OCI.jpg"},
  { id: 3, source: "https://ik.imagekit.io/camilo25images/3SQL.jpg"},
  { id: 4, source: "https://ik.imagekit.io/camilo25images/2SQL.jpg"},
  { id: 5, source: "https://ik.imagekit.io/camilo25images/1IA.png"},
  { id: 6, source: "https://ik.imagekit.io/camilo25images/finalizacion%20programa.png"},
  { id: 7, source: "https://ik.imagekit.io/camilo25images/GITHUB%20FUNDATIONS.jpg?updatedAt=1763523799791"},
  { id: 8, source: "https://ik.imagekit.io/camilo25images/BOOTCAMP%20FRONTEND.jpg?updatedAt=1763523800015"},
  { id: 9, source: "https://ik.imagekit.io/camilo25images/TALENTO%20TECH.jpg?updatedAt=1763523801174"},
  { id: 10, source: "https://ik.imagekit.io/camilo25images/JAVA%20FOUNDATIONS.jpg?updatedAt=1763523799765"},
  { id: 11, source: "https://ik.imagekit.io/camilo25images/PYTHON%20ESSENTIALS%202.jpg?updatedAt=1763523800060"},
  { id: 12, source: "https://ik.imagekit.io/camilo25images/PYTHON%20ESSENTIALS%201.jpg?updatedAt=1763523800065"},
  { id: 13, source: "https://ik.imagekit.io/camilo25images/PYTHON%20MINTIC.jpg?updatedAt=1763523965398"},
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const totalCerts = certificatesData.length;

  const handlePrev = () => { //<-
    setCurrentIndex(prevIndex => (prevIndex === 0 ? totalCerts - 1 : prevIndex - 1));
  };

  const handleNext = () => { // ->
    setCurrentIndex(prevIndex => (prevIndex === totalCerts - 1 ? 0 : prevIndex + 1));
  };
  
  const currentCert = certificatesData[currentIndex]; // actual

  return (
    <section data-aos="zoom-in" className="section certifications-section">
      <div className='contenedorTitle'>
        <h2>Certificaciones complementarias</h2>
      </div>
      <div className="carousel-controls">
        {/* <- */}
        <button onClick={handlePrev} className="carousel-arrow">
          <FaChevronLeft /> 
        </button>

        <div className="certificate-item-wrapper">
          <div className="certificate-item">
            <img 
              src={currentCert.source} 
              alt={currentCert.title} 
              className="cert-image"
            />
          </div>
        </div>
        {/* -> */}
        <button onClick={handleNext} className="carousel-arrow">
          <FaChevronRight />
        </button>
      </div>

      <div className="carousel-dots">
        {certificatesData.map((_, index) => (
          <span 
            key={index} 
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Certifications;