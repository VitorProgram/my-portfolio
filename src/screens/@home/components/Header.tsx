"use client";

import theme from "@/theme";
import { Anchor, Flex, Image, NavLink, Title } from "@mantine/core";
import Link from "next/link";

const Header = () => {
  return (
    <header style={{ width: "100%" }}>
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
          <Anchor
            tt="uppercase"
            td="none"
            size="14px"
            fw={600}
            c={theme.neutralOne}
          >
            Home
          </Anchor>
          <Anchor
            tt="uppercase"
            td="none"
            size="14px"
            fw={600}
            c={theme.neutralOne}
          >
            About
          </Anchor>
          <Anchor
            tt="uppercase"
            td="none"
            size="14px"
            fw={600}
            c={theme.neutralOne}
          >
            Projects
          </Anchor>
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
