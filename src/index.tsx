import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import ApplicationStoreProvider from "store/ApplicationStore";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ApplicationStoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApplicationStoreProvider>
);
