"use client";
import theme from "@/theme";
import { ActionIcon, Button, Flex, Stack, Text, Title } from "@mantine/core";
import { useHover, useMediaQuery } from "@mantine/hooks";
import { motion } from "motion/react";
import { useState } from "react";
import { FaCheck, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdCopy } from "react-icons/io";

const InviteEmail = () => {
  const { hovered, ref } = useHover();
  const isMobile = useMediaQuery("(max-width: 600px)");

  const [copied, setCopied] = useState<boolean>(false);

  const email = "joaovitornascimentoif@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Stack h="100vh" pb={42}>
      <Stack
        id="contact"
        h="calc(100vh - 50px)"
        justify="center"
        gap={48}
        flex={1}
      >
        <Stack align="center" gap={32}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            viewport={{ amount: 1 }}
          >
            <Title
              fw={600}
              c={theme.white}
              size={!isMobile ? "58px" : "38px"}
              maw={800}
              ta="center"
            >
              Qual vai ser meu próximo projeto?
            </Title>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ amount: 1 }}
          >
            <Text
              c={theme.neutralTwo}
              size={!isMobile ? "32px" : "24px"}
              fw={500}
              ta="center"
              style={{
                background: "linear-gradient(90deg, #d5d5d5, #a9a9a9, #7d7d7d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Copie o e-mail e entre em contato para criarmos projetos
              incríveis!
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ amount: 1 }}
          >
            <Button
              mt={20}
              h={60}
              w={250}
              radius={16}
              onClick={copyToClipboard}
              ref={ref}
              rightSection={
                copied ? <FaCheck size={20} /> : <IoMdCopy size={20} />
              }
              bg={hovered ? theme.bgHover : theme.bgButton}
              bd="1px solid rgba(255, 255, 255, 0.1)"
            >
              <Text
                fw={600}
                size="20px"
                style={{
                  background:
                    "linear-gradient(90deg, #d5d5d5, #a9a9a9, #7d7d7d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {copied ? "E-mail copiado" : "Copiar e-mail"}
              </Text>
            </Button>
          </motion.div>
        </Stack>
      </Stack>
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        viewport={{ amount: 0.2 }}
        style={{
          width: "100%",
        }}
      >
        <Flex
          w="100%"
          justify={!isMobile ? "space-between" : "center"}
          direction={!isMobile ? "row" : "column"}
          gap={16}
        >
          <Text
            c={theme.neutralOne}
            size="20px"
            ta={!isMobile ? "start" : "center"}
          >
            © 2025 Vitor Silva. Todos os Direitos Reservados.
          </Text>

          <Flex gap={32} justify="center">
            <ActionIcon
              variant="transparent"
              size={30}
              c={theme.white}
              component="a"
              href="https://github.com/VitorProgram"
              target="_blank"
            >
              <FaGithub size={30} />
            </ActionIcon>

            <ActionIcon
              variant="transparent"
              size={30}
              c={theme.white}
              component="a" // Faz o ActionIcon funcionar como um link
              href="https://www.linkedin.com/in/vitorprogram/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </ActionIcon>
          </Flex>
        </Flex>
      </motion.footer>
    </Stack>
  );
};

export default InviteEmail;
