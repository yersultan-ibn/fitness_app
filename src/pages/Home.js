import { Search } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import { HeroBanner } from "../components/HeroBanner";
import { SearchExercises } from "../components/SearchExercises";
import { Exercises } from "../components/Exercises";

export const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};
