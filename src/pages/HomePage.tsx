import ContactUs from "@/components/ContactUs/ContactUs";
import Vacancies from "@/components/Vacancies/Vacancies";
import { Box } from "@mui/material";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <Box>
      <Vacancies />
      <ContactUs />
    </Box>
  );
};
export default HomePage;
