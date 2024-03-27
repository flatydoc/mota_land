"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#84D7FF",
      main: "#19A4E8",
      dark: "#1072A2",
    },
    error: {
      light: "#C8F7C7",
      main: "#AA401E",
    },
    success: {
      light: "#F7B9A5",
      main: "#5E975C",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          formControl: {
            "label[data-shrink=false].MuiFormLabel-root ~ & ::-webkit-input-placeholder":
              {
                opacity: "0.5!important",
              },
          },
        },
      },
    },
  },
});
