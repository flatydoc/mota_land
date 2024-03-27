"use client";
import { Box } from "@mui/material";
import styles from "./Vacancies.module.scss";
import CircleButton from "../ui/CircleButton/CircleButton";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import { scrollToElement } from "@/core/utils/scrollToElement";
import VacanciesList from "./VacanciesList/VacanciesList";

export default function Vacancies() {
  return (
    <Box id="vacancies" className={styles.vacancies}>
      <h2 className={styles.title}>Vacancies</h2>
      <VacanciesList />
      <CircleButton event={() => scrollToElement("form")}>
        <ArrowDownwardRoundedIcon
          sx={{
            width: "64px",
            height: "64px",
          }}
        />
      </CircleButton>
    </Box>
  );
}
