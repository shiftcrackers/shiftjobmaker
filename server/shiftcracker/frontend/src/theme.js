import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#80cbc4",
    },
    secondary: {
      main: "#5e35b1",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
    },
  },
  typography: {
    fontFamily: "Noto Sans KR, Arial, sans-serif",
  },
});

export default theme;
