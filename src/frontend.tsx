/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { ToastStack } from "@mcbalaam/razdor-ui";
import { I18nProvider } from "./translate";
import { i18n } from "./translate";
import './index.css';

const elem = document.getElementById("root")!;
const app = (
  <StrictMode>
    <ToastStack>
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
    </ToastStack>
  </StrictMode>
);

if (import.meta.hot) {
  // With hot module reloading, `import.meta.hot.data` is persisted.
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  // The hot module reloading API is not available in production.
  createRoot(elem).render(app);
}
