"use client";
import theme from "@/theme";
import { Flex, Image, Stack, Title } from "@mantine/core";
import { motion } from "motion/react";
import "./style.css";

const Technologies = () => {
  const technologiesData = [
    { path: "/technologies/javascript.svg" },
    { path: "/technologies/typescript.svg" },
    { path: "/technologies/react.svg" },
    { path: "/technologies/nextjs.svg" },
    { path: "/technologies/figma.svg" },
    { path: "/technologies/git.svg" },
  ];

  return (
    <Stack align="center" gap={64}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ amount: 1, once: true }}
      >
        <Title
          order={2}
          fw={500}
          c={theme.neutralTwo}
          style={{
            background: "linear-gradient(90deg, #d5d5d5, #a9a9a9, #7d7d7d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Experiência com
        </Title>
      </motion.div>

      <Flex w="100%" maw={600} justify="space-around" gap={32} wrap="wrap">
        {technologiesData.map((tech, index) => (
          <motion.div
            key={tech.path}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.5, once: true }} // Garante que só anima uma vez
          >
            <Image className="image-mantine" src={tech.path} w={40} />
          </motion.div>
        ))}
      </Flex>
    </Stack>
  );
};

export default Technologies;
