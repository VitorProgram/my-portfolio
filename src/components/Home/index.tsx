"use client";
import { ActionIcon, Image, Stack, Title } from "@mantine/core";
import Header from "./components/Header";
import theme from "@/theme";
import "./animation.css";
import DownloadCVButton from "./components/DownloadCVButton";
import { motion } from "motion/react";
import { useMediaQuery } from "@mantine/hooks";

const Home = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Stack id="home" h="100vh" align="center" justify="center">
      {!isMobile && <Header />}

      <Stack mb={42} align="center" gap={8}>
        <motion.div
          initial={{ opacity: 0, y: -60 }} // Começa invisível e um pouco acima
          animate={{ y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Title
            size={!isMobile ? "72px" : "48px"}
            ta="center"
            c={theme.neutralOne}
          >
            Vitor Silva
          </Title>
          <Title
            size={!isMobile ? "32px" : "24px"}
            ta="center"
            fw={500}
            c={theme.neutralTwo}
          >
            Desenvolvedor Front-End
          </Title>
        </motion.div>
        <DownloadCVButton />
      </Stack>

      <motion.a
        href="#techs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.4, delay: 0 },
        }}
        whileTap={{ scale: 1 }}
        style={{ position: "absolute", bottom: "42px" }}
      >
        <ActionIcon variant="transparent">
          <Image src="/chevron-down.svg" w={40} />
        </ActionIcon>
      </motion.a>

      {/* Spotlight Animation */}
      <div className="box">
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Stack>
  );
};

export default Home;
