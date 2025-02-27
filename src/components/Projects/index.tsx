"use client";
import theme from "@/theme";
import { Button, Flex, Image, Stack, Text, Title } from "@mantine/core";
import { FaGithub } from "react-icons/fa";
import { LuMonitorDot } from "react-icons/lu";
import "./style.css";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import { motion } from "motion/react";

const Projects = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [viewMore, setViewMore] = useState<boolean>(false);

  const projectData = [
    {
      keyProject: Math.floor(Math.random() * 1000000),
      name: "Stock Flow",
      description: `
        O Stock Flow é um sistema de gerenciamento de estoque para pequenas e médias empresas, focado em controle eficiente de produtos, entradas e saídas. Com uma interface moderna e intuitiva, oferece um dashboard interativo, notificações visuais e registros detalhados de movimentações.  
        Desenvolvido com Next.js, utiliza Mantine UI para estilização, Prisma ORM para banco de dados e Node.js + Express no backend. Tecnologias como React Query, React Hook Form e Motion garantem alta performance, usabilidade e animações fluidas, tornando a gestão de estoque mais ágil e prática.
      `,
      imageUrl: "/stock-flow.svg",
      githubLink: "",
      portfolioLink: "",
    },
    {
      keyProject: Math.floor(Math.random() * 1000000),
      name: "Barber Now",
      description: `
        Barber Now é um aplicativo de agendamento para barbearias, proporcionando uma experiência intuitiva e eficiente para clientes e profissionais. Com um catálogo interativo, os usuários podem explorar barbearias, verificar horários disponíveis e agendar cortes de forma rápida.  
        A plataforma possui rotas dinâmicas, permitindo que cada barbearia tenha uma página personalizada com informações detalhadas e serviços. O design mobile-first garante uma navegação fluida em qualquer dispositivo.  
        Desenvolvido com Next.js, Mantine UI, Prisma ORM, Node.js e Express, o projeto utiliza React Query e React Hook Form para eficiência na manipulação de dados e Motion para animações suaves, tornando o processo de agendamento mais simples e acessível.
      `,
      imageUrl: "/barber-now.svg",
      githubLink: "",
      portfolioLink: "",
    },
    {
      keyProject: Math.floor(Math.random() * 1000000),
      name: "Mod Notes",
      description: `
        O Mod Notes é um aplicativo intuitivo e eficiente para criação e armazenamento de notas, oferecendo suporte tanto para notas em texto quanto por meio de áudio. Desenvolvido com React e Styled-Components, o projeto proporciona adição, exclusão, criação de notas por audio e a possibilidade de pesquisar entre as notas. As notas do usuário são armazenadas localmente no Local Storage, garantindo acesso rápido e seguro, mesmo sem conexão com a internet. Ideal para quem busca organização e praticidade no dia a dia,
        Particularmente é um projeto que uso no meu ao decorrer da semana para organizar minhas proprias tarefas ou objetivos.
    `,

      imageUrl: "/modnotes-bg.svg",
      githubLink: "https://github.com/VitorProgram/ModNotes",
      portfolioLink: "https://mod-notes.vercel.app",
    },
  ];

  return (
    <Stack id="projects" pt={100} gap={32}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ amount: 1 }}
      >
        <Title
          style={{
            background: "linear-gradient(90deg, #d5d5d5, #a9a9a9, #7d7d7d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
          order={2}
        >
          Meus últimos projetos
        </Title>
      </motion.div>

      <Stack gap={50}>
        {projectData.map((project, index) => (
          <motion.div
            key={project.keyProject}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ amount: 0.4 }}
            style={{ zIndex: 1000 }}
          >
            <Flex
              w="100%"
              gap={32}
              direction={
                isMobile ? "column" : index % 2 === 0 ? "row" : "row-reverse"
              }
            >
              <Image
                alt="Imagem do projeto"
                flex={1}
                radius={20}
                src={project.imageUrl}
                style={{
                  maxWidth: 594,
                  maxHeight: 490,
                  width: "100%", // Garante que ela se ajuste ao container
                  objectFit: "cover", // Evita distorção
                }}
              />

              <Stack flex={1} justify="flex-end" pb={48}>
                <Title c={theme.neutralOne}>{project.name}</Title>
                <Text lineClamp={viewMore ? 0 : 8} c={theme.neutralTwo}>
                  {project.description}
                </Text>
                {isMobile && (
                  <Text
                    onClick={() => setViewMore((prev) => !prev)}
                    p={0}
                    ta="start"
                    td="underline"
                    c="blue"
                    style={{ cursor: "pointer" }}
                  >
                    {viewMore ? "Ver menos" : "Ver Mais"}
                  </Text>
                )}

                <Flex gap={16}>
                  <Button
                    className="button-mantine"
                    w={150}
                    radius={10}
                    leftSection={<FaGithub size={20} />}
                    component="a"
                    target="_blank"
                    href={project.githubLink}
                  >
                    Github
                  </Button>

                  <Button
                    className="button-mantine"
                    w={150}
                    radius={10}
                    leftSection={<LuMonitorDot size={20} />}
                    component="a"
                    target="_blank"
                    href={project.portfolioLink}
                  >
                    Online
                  </Button>
                </Flex>
              </Stack>
            </Flex>
          </motion.div>
        ))}
      </Stack>
    </Stack>
  );
};

export default Projects;
