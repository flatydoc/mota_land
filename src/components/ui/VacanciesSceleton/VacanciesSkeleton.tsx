"use client";
import { Box, Skeleton } from "@mui/material";
import styles from "./VacanciesSkeleton.module.scss";

export default function VacanciesSkeleton() {
  return (
    <>
      <Box className={styles.vacanciesList}>
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            variant="rounded"
            key={index}
            height={"521px"}
            sx={{
              borderRadius: "36px",
            }}
          />
        ))}
      </Box>
    </>
  );
}
