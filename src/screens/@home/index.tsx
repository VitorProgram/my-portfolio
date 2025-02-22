import { ActionIcon, Image, Stack, Title } from "@mantine/core";
import Header from "./components/Header";
import theme from "@/theme";

const Home = () => {
  return (
    <Stack h="100vh" align="center" justify="space-between" pb={42}>
      <Header />

      <Stack ta="center" gap={8}>
        <Title ta="center" fw={500} c={theme.neutralTwo}>
          Desenvolvedor
        </Title>
        <Title c={theme.neutralOne}>Front-End</Title>
      </Stack>

      <ActionIcon variant="transparent">
        <Image src="/chevron-down.svg" w={40} />
      </ActionIcon>
    </Stack>
  );
};

export default Home;
