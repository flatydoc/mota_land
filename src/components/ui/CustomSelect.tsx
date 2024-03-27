import { Select, styled } from "@mui/material";

export const CustomSelect = styled(Select)(({ theme }) => ({
  "& .MuiSelect-select": {
    position: "relative",
    borderRadius: 16,
    border: "1px solid",
    borderColor: theme.palette.error.main, // Adjust the border color as needed
    boxShadow: "0px 2px 6px 0px #3F3F3F29",
    fontSize: 20,
    padding: "10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      boxShadow: `none`,
      borderColor: theme.palette.error.main, // Adjust the border color on focus
    },
  },
}));
