import "@fontsource/lato";
import "@fontsource/metrophobic";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/index.js";
import { RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle.js";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme/theme";
import appRouter from "./routers/appRouter.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Provider store={store}>
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
