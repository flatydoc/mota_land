import { Box } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styles from "./Layout.module.scss";

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Box component={"main"}>{children}</Box>
      <Footer />
    </div>
  );
};

export default Layout;
