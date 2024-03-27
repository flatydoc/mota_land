"use client";
import { Box } from "@mui/material";
import styles from "./VacanciesList.module.scss";
import useSWRImmutable from "swr/immutable";
import { getAllVacancies } from "@/core/services/vacancies.service";
import { useState } from "react";
import { Vacancy } from "../Vacancy/Vacancy";
import VacanciesSkeleton from "@/components/ui/VacanciesSceleton/VacanciesSkeleton";
import {
  KeyboardArrowDownRounded,
  KeyboardArrowUpRounded,
} from "@mui/icons-material";
import { mockVacancies } from "@/core/constants";

export default function VacanciesList() {
  const [displayCount, setDisplayCount] = useState(4);
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    data: vacancies,
    isLoading,
    error,
  } = useSWRImmutable("vacancies", getAllVacancies);

  const dataToDisplay = !vacancies || error ? mockVacancies : vacancies;

  if (isLoading) {
    return <VacanciesSkeleton />;
  }

  const toggleExpansion = () => {
    if (isExpanded) {
      setDisplayCount(4);
    } else {
      setDisplayCount(dataToDisplay.data.length);
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Box className={styles.vacanciesList}>
        {dataToDisplay.data.slice(0, displayCount).map((vacancy: any) => (
          <Vacancy key={vacancy.id} vacancy={vacancy} />
        ))}
      </Box>
      {dataToDisplay.data.length > 4 && (
        <button
          aria-label="Show all vacancies"
          onClick={toggleExpansion}
          className={styles.btn}>
          <span>{isExpanded ? "Hide" : "See All"}</span>
          {isExpanded ? (
            <KeyboardArrowUpRounded fontSize="large" />
          ) : (
            <KeyboardArrowDownRounded fontSize="large" />
          )}
        </button>
      )}
    </>
  );
}
