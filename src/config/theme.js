import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {},
  typography: {
    fontFamily: ["Raleway", "Helvetica", "Arial", "sans-serif"].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          "& body": {
            background: "#F8F4ED",
            color: "#595244",
          },
        },
      },
    },
  },
});

export default theme;
