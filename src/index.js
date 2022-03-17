import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CssBaseline from "@material-ui/core/CssBaseline";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Typography } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";

let theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ff531a",
    },
    secondary: {
      main: "#ff531a",
    },
    background: {
      main: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
  },
  overrides: {
    MuiTab: {
      root: {
        "&.MuiTab-root": {
          backgroundColor: "black",
          border: 0,
          borderBottom: "2px solid",
          "&:hover": {
            border: 0,
            borderBottom: "2px solid",
          },
        },
      },
    },
  },
});

theme = createTheme(theme, {
  palette: {
    info: {
      main: theme.palette.secondary.main,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography color="textPrimary" border="textPrimary">
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <App />
        </BrowserRouter>
      </Typography>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
