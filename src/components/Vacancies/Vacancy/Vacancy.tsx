import { Box } from "@mui/material";
import styles from "./Vacancy.module.scss";
import { FC } from "react";
import Button from "@/components/ui/Button/Button";
import { scrollToElement } from "@/core/utils/scrollToElement";

interface IVacancyProps {
  vacancy: any;
}

export const Vacancy: FC<IVacancyProps> = ({ vacancy }) => {
  return (
    <Box className={styles.vacancy}>
      <div style={{ marginBottom: "20px" }}>
        <h3 className={styles.title}>{vacancy.attributes.title}</h3>
        <p className={styles.grade}>{vacancy.attributes.grade}</p>
        <p className={styles.subtitle}>{vacancy.attributes.subtitle}</p>
        <p className={styles.description}>{vacancy.attributes.description}</p>
      </div>
      <Button
        text="Respond"
        type="button"
        event={() => scrollToElement("form")}
      />
    </Box>
  );
};
