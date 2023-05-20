import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Detail } from "../components/Detail";
import { ExerciseVideos } from "../components/ExerciseVideos";
import { SimilarExercises } from "../components/SimilarExercises";
import { useParams } from "react-router-dom";
import { exerciseOptions, fetchData } from "../utils/fetchData";

export const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = `https://exercisedb.p.rapidapi.com`;
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com/channel/about";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseDetailData);
    };

    fetchExercisesData();
  }, []);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  );
};
