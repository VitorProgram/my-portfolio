import Home from "@/screens/@home";
import theme from "@/theme";
import { Box } from "@mantine/core";

const App = () => {
  return (
    <Box
      bg={theme.bg}
      pr={112}
      pl={112}
      style={{ position: "relative", zIndex: 2 }}
    >
      <Home />
    </Box>
  );
};

export default App;
