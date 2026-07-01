import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1565C0",
    },
    secondary: {
      main: "#00ACC1",
    },
    background: {
      default: "#F5F7FA",
    },
  },

  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
  },

  shape: {
    borderRadius: 10,
  },
});

export default theme;