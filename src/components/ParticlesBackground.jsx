import { Particles } from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

function ParticlesBackground({ config }) {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={config}
      className="tsparticles"
    />
  );
}

export default ParticlesBackground;