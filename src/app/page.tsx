import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import { Box } from "@mantine/core";

const App = () => {
  return (
    <Box pr={112} pl={112}>
      <Home />
      <Technologies />
      <Projects />
    </Box>
  );
};

export default App;
