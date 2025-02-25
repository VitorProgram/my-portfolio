"use client";

import theme from "@/theme";
import { Anchor, Flex, Image, Title } from "@mantine/core";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  const navLinks = [
    { name: "Home" },
    { name: "Projects" },
    { name: "Education" },
    { name: "Contact" },
  ];

  return (
    <motion.header
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1, delay: 0.4 }}
      viewport={{ once: true }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        padding: "10px 32px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        zIndex: 2000,
        backdropFilter: "blur(10px)", // Efeito de blur no fundo
        WebkitBackdropFilter: "blur(10px)", // Suporte para Safari
      }}
    >
      <Flex h={50} w="100%" justify="space-between" align="center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Flex align="center">
            <Image w={40} src="/logo.svg" alt="logo com nome Vitor" />

            <Title order={3} c={theme.neutralOne}>
              Vitor
            </Title>
          </Flex>
        </Link>

        <Flex gap={32}>
          {navLinks.map((link) => (
            <Anchor
              key={link.name}
              href={`#${link.name.toLocaleLowerCase()}`}
              c={theme.neutralOne}
              tt="uppercase"
              td="none"
              size="14px"
              fw={600}
            >
              {link.name}
            </Anchor>
          ))}
        </Flex>
      </Flex>
    </motion.header>
  );
};

export default Header;
