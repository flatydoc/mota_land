"use client";
import { Box } from "@mui/material";
import styles from "./Footer.module.scss";
import Image from "next/image";
import {
  EmailRounded,
  LocalPhoneRounded,
  LocationOnRounded,
} from "@mui/icons-material";
import FacebookIcon from "./fb.svg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box className={styles.footer} component={"footer"}>
      <div className={styles.footerWrapper}>
        <Image
          className={styles.logo}
          src="/Conmoto_logo.png"
          alt="Conmoto Logo"
          width={202}
          height={108}
          loading="lazy"
        />
        <div className={styles.contactus}>
          <p className={styles.title}>Contact Us</p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <EmailRounded />
              <a href="mailto:inbox@mota-games.com">inbox@mota-games.com</a>
            </li>
            <li className={styles.listItem}>
              <LocalPhoneRounded />
              <a href="tel:+375 33 991-13-31">+375 (33) 991-13-31</a>
            </li>
            <li className={styles.listItem}>
              <LocationOnRounded />
              <p>Nezavisimosti 173, room 234, office 24</p>
            </li>
          </ul>
        </div>
        <div className={styles.social}>
          <p className={styles.title}>Follow Us</p>
          <ul className={styles.socialList}>
            <li className={styles.socialListItem}>
              <a
                href="https://www.instagram.com/motagames_studio?igsh=bjdvOXRjYWNjeWV4"
                className={styles.link}>
                <Image
                  className={styles.icon}
                  src="/inst.svg"
                  alt="Instagram Logo"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </li>
            <li className={styles.socialListItem}>
              <a
                href="https://www.linkedin.com/company/mota-games/"
                className={styles.link}>
                <Image
                  className={styles.icon}
                  src="/linkedin.svg"
                  alt="Linkedin Logo"
                  width={30}
                  height={30}
                  priority
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={
          styles.rights
        }>{`© ${currentYear} Mota Games. All rights reserved`}</div>
    </Box>
  );
}
