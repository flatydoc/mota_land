"use client";

import { Box } from "@mui/material";
import styles from "./Header.module.scss";
import CircleButton from "./ui/CircleButton/CircleButton";
import ArrowDownwardRoundedIcon from "@mui/icons-material/ArrowDownwardRounded";
import Image from "next/image";
import { scrollToElement } from "@/core/utils/scrollToElement";

export default function Header() {
  return (
    <Box className={styles.header} component={"header"}>
      <h1 className="visually-hidden">Conmoto</h1>
      <Image
        className={styles.logo}
        src="/Conmoto_logo.png"
        alt="Conmoto Logo"
        width={1164}
        height={421}
        priority
        // layout="responsive"
      />
      <CircleButton event={() => scrollToElement("vacancies")}>
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
