"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import "./style.css";

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "#000000" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "grab" },
        },
        modes: {
          push: { quantity: 3 }, // Menos partículas ao clicar
          repulse: { distance: 100, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#3d3d3d" },
        links: {
          color: "#3d3d3d",
          distance: 150,
          enable: true,
          opacity: 0.4,
          width: 1, // Linhas mais finas
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 1, // Movimento mais suave
          straight: false,
        },
        number: {
          density: { enable: true },
          value: 70, // 🔹 Reduzindo para um efeito minimalista
        },
        opacity: { value: 0.3 }, // Mais transparência
        shape: { type: "circle" },
        size: { value: { min: 3, max: 6 } }, // Tamanhos mais uniformes
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        style={{ zIndex: -1 }}
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;
