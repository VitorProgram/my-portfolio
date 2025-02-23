"use client";
import theme from "@/theme";
import { Anchor, Button } from "@mantine/core";
import { useHover } from "@mantine/hooks";
import { motion } from "motion/react";

const ButtonCV = () => {
  const { hovered, ref } = useHover();
  const cvPath = "/vitor_frontend_cv.pdf";

  return (
    <motion.div
      style={{ width: "100%", maxWidth: "250px" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Anchor download href={cvPath} c={theme.neutralOne} td="none">
        <Button
          mt={20}
          h={60}
          fullWidth
          radius={16}
          ref={ref}
          bg={hovered ? theme.bgHover : theme.bg}
          bd={`1px solid rgba(255, 255, 255, 0.1)`}
          size="16px"
        >
          Download CV
        </Button>
      </Anchor>
    </motion.div>
  );
};

export default ButtonCV;
