import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import ApplicationStoreProvider from "./store/ApplicationStore";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <ApplicationStoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApplicationStoreProvider>,
);
