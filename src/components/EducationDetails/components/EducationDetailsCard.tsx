import theme from "@/theme";
import { Flex, Image, Stack, Text, Title } from "@mantine/core";
import { motion } from "motion/react";

interface EducationDetailsCardProps {
  title: string;
  data: {
    id: number;
    title: string;
    organization: string;
    duration: string;
    imageUrl: string;
  }[];
}

const EducationDetailsCard = ({ title, data }: EducationDetailsCardProps) => {
  return (
    <Stack flex={1}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ amount: 0.8 }}
      >
        <Title
          fw={600}
          style={{
            background: "linear-gradient(90deg, #d5d5d5, #a9a9a9, #7d7d7d)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {title}
        </Title>
      </motion.div>

      {data.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ amount: 0.3 }}
        >
          <Flex
            h="100%"
            pt={16}
            pb={16}
            gap={16}
            align="center"
            style={{
              borderBottom: `1px solid ${theme.neutralTwo}`,
              cursor: "pointer",
            }}
          >
            <Image
              radius={8}
              w={50}
              h={50}
              src={item.imageUrl}
              alt="Logo da instituição"
            />

            <Stack gap={8}>
              <Title order={3} fw={600} c={theme.neutralOne}>
                {item.title} - {item.organization}
              </Title>
              <Text c={theme.neutralTwo}>{item.duration}</Text>
            </Stack>
          </Flex>
        </motion.div>
      ))}
    </Stack>
  );
};

export default EducationDetailsCard;
