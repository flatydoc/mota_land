"use client";
import { Box } from "@mui/material";
import styles from "./ContactUs.module.scss";
import Form from "./Form/Form";

export default function ContactUs() {
  return (
    <Box id="form" className={styles.contactus}>
      <h2 className={styles.title}>Contact Us</h2>
      <Form />
    </Box>
  );
}
