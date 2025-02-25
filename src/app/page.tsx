import InviteEmail from "@/components/InviteEmail";
import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { Box } from "@mantine/core";
import EducationDetails from "@/components/EducationDetails";

const App = () => {
  return (
    <Box pr={112} pl={112}>
      <Home />
      <Technologies />
      <Projects />
      <EducationDetails />
      <InviteEmail />
    </Box>
  );
};

export default App;
