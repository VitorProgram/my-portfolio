"use client";

import theme from "@/theme";
import { Anchor, Flex, Image, NavLink, Title } from "@mantine/core";
import Link from "next/link";
import { motion } from "motion/react";

const Header = () => {
  const navLinks = [{ name: "Home" }, { name: "About" }, { name: "Projects" }];

  return (
    <motion.header
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4 }}
      viewport={{ once: true }}
      style={{ width: "100%" }}
    >
      <Flex h={96} w="100%" justify="space-between" align="center">
        <Link href="/" style={{ textDecoration: "none" }}>
          <Flex align="center">
            <Image w={40} src="/logo.svg" />

            <Title order={3} c={theme.neutralOne}>
              Vitor
            </Title>
          </Flex>
        </Link>

        <Flex gap={32}>
          {navLinks.map((link) => (
            <Anchor
              key={link.name}
              href={`/${link.name.toLocaleLowerCase()}`}
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
