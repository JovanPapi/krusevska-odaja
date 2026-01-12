import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import LanguageSwitcherProvider from "./store/LanguageSwitcher";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <LanguageSwitcherProvider>
    <BrowserRouter>
      <Toaster
        toastOptions={{
          duration: 2750,
          position: "top-center",
          style: { fontSize: "1.2rem" },
        }}
      />
      <App />
    </BrowserRouter>
  </LanguageSwitcherProvider>,
);
