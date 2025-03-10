"use client";
import { Stack } from "@mantine/core";
import EducationDetailsCard from "./components/EducationDetailsCard";
import { dataAchievements, dataFormation } from "./detailsData";

const EducationDetails = () => {
  return (
    <Stack id="education" pt={80} gap={64}>
      <EducationDetailsCard title="Formação" data={dataFormation} />
      <EducationDetailsCard title="Conquistas" data={dataAchievements} />
    </Stack>
  );
};

export default EducationDetails;
