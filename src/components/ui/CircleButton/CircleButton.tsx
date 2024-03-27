"use client";

import { PropsWithChildren } from "react";
import styles from "./CircleButton.module.scss";

export default function CircleButton({
  children,
  event,
}: PropsWithChildren<{ event: () => void }>) {
  return (
    <button aria-label="scroll button" onClick={event} className={styles.btn}>
      {children}
    </button>
  );
}
