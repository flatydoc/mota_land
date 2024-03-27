import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const CustomInput = styled(InputBase)(({ theme, error }) => ({
  "&& .MuiInputBase-input": {
    position: "relative",
    borderRadius: 16,
    border: "1px solid",
    borderColor: error ? theme.palette.error.main : "transparent",
    boxShadow: "0px 2px 6px 0px #3F3F3F29",
    fontSize: 20,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `none`,
      borderColor: error ? theme.palette.error.main : "#0A5F88",
    },
    "&::placeholder": {
      color: "gray", // Adjust the color as needed
      opacity: "1 !important",
    },
  },
}));
