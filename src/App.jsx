import { useEffect, useState } from "react";
import Portfolio from "./components/Portfolio";
import "aos/dist/aos.css";
import AOS from "aos";
import ParticlesBackground from "./components/ParticlesBackground";
import "./App.css"

function App() {

  const [particlesConfig, setParticlesConfig] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    AOS.refresh();

    fetch("/particles/particlesjs-config.json")
      .then((res) => res.json())
      .then((data) => setParticlesConfig(data));
  }, []);

  return (
    <>
      {particlesConfig && <ParticlesBackground config={particlesConfig} />}
      <Portfolio />
    </>
  );
}

export default App;
