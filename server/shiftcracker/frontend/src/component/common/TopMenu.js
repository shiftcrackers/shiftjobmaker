import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import { Button, Link } from "@mui/material";
import theme from "../../theme.js";
import { ThemeProvider } from "@emotion/react";

export const TopMenu = ({ title }) => {
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // ...(open && {
    //     marginLeft: drawerWidth,
    //     width: `calc(100% - ${drawerWidth}px)`,
    //     transition: theme.transitions.create(['width', 'margin'], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.enteringScreen,
    //     }),
    // }),
  }));

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        position="absolute"
        color="primary"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar
          sx={{
            flexWrap: "wrap",
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <nav>
            <Link variant="button" color="text.primary" href="/sample" sx={{ my: 1, mx: 1.5 }}>
              Sample
            </Link>
          </nav>
          <Button href="#" color="secondary" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
export default TopMenu;
