import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import ApplicationStoreProvider from "./store/ApplicationStore";
import LanguageSwitcherProvider from "./store/LanguageSwitcher";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <LanguageSwitcherProvider>
    <ApplicationStoreProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApplicationStoreProvider>
  </LanguageSwitcherProvider>
);
