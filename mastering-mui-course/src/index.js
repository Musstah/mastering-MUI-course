import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, ThemeProvider } from "@mui/material";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const theme = createTheme({
//   components: {
//     MuiButton: {
//       styleOverrides: {
//         text: {
//           color: "blue",
//           bgcolor: "red",
//           borderRadius: 50,
//           height: "5rem",
//           width: "10rem",
//         },
//       },
//     },
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#008000",
//     },
//     secondary: {
//       main: "#FFA500",
//     },
//     customColors: {
//       royalBlue: "#4169E1",
//     },
//   },
//   components: {
//     MuiButton: {
//       defaultProps: {
//         disableRipple: true,
//       },
//       styleOverrides: {
//         outlined: ({ theme, ownerState }) => ({
//           color: ownerState.size === "small" ? "red" : "black",
//           borderColor: ownerState.myCustomProp
//             ? "red"
//             : theme.palette.customColors.royalBlue,
//         }),
//       },
//     },
//   },
// });

const theme = createTheme();

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
