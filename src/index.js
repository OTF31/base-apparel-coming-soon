import React from "react";
import { createRoot } from "react-dom/client";
import { NativeBaseProvider, extendTheme } from "native-base";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = extendTheme({
  colors: {
    DesaturatedRed: `hsl(0, 36%, 70%)`,
    SoftRed: `hsl(0, 93%, 68%)`,
    DarkGrayishRed: `hsl(0, 6%, 24%)`,
  },
  config: {
    initialColorMode: "light",
  },
  fonts: {
    heading: "Josefin Sans",
    body: "Josefin Sans",
    mono: "Josefin Sans",
  },
});

const config = {
  dependencies: {
    "linear-gradient": require("react-native-web-linear-gradient").default,
  },
};

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NativeBaseProvider theme={theme} config={config}>
      <App />
    </NativeBaseProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
