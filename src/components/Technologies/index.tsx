"use client";
import theme from "@/theme";
import { Flex, Image, Stack, Title } from "@mantine/core";
import { motion } from "motion/react";
import "./style.css";

const Technologies = () => {
  const technologiesData = [
    { path: "/technologies/javascript.svg", name: "Javascript" },
    { path: "/technologies/typescript.svg", name: "Typescript" },
    { path: "/technologies/react.svg", name: "React" },
    { path: "/technologies/nextjs.svg", name: "Nextjs" },
    { path: "/technologies/figma.svg", name: "Figma" },
    { path: "/technologies/git.svg", name: "Git" },
    { path: "/technologies/mantine.svg", name: "Mantine" },
  ];

  return (
    <Stack id="techs" align="center" gap={64} mih="50vh" justify="center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ amount: 1 }}
      >
        <Title
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

      <Flex
        w="100%"
        maw={600}
        justify="space-around"
        gap={32}
        wrap="wrap"
        style={{ zIndex: 999 }}
      >
        {technologiesData.map((tech, index) => (
          <motion.div
            key={tech.path}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ amount: 0.5 }}
          >
            <Image
              radius={8}
              className="image"
              src={tech.path}
              w={40}
              alt={`Ícone: ${tech.name}`}
            />
          </motion.div>
        ))}
      </Flex>
    </Stack>
  );
};

export default Technologies;
