import InviteEmail from "@/components/InviteEmail";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { Box } from "@mantine/core";
import EducationDetails from "@/components/EducationDetails";
import ParticlesComponent from "@/components/Particles";

const App = () => {
  return (
    <Box pr={32} pl={32} style={{ position: "relative", overflow: "hidden" }}>
      <ParticlesComponent /> {/* Fundo de partículas fixo e no fundo */}
      <Home />
      <Technologies />
      <Projects />
      <EducationDetails />
      <InviteEmail />
    </Box>
  );
};

export default App;
