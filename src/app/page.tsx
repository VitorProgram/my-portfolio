import Home from "@/components/Home";
import Technologies from "@/components/Technologies";
import { Box } from "@mantine/core";

const App = () => {
  return (
    <Box pr={112} pl={112}>
      <Home />
      <Technologies />
    </Box>
  );
};

export default App;
