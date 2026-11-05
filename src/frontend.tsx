import { StrictMode } from "preact/compat";
import { createRoot } from "preact/compat/client";
import { App } from "./App";
import { ToastStack } from "@mcbalaam/razdor-ui";
import { I18nProvider, i18n } from "./translate";
import "./index.css";

const elem = document.getElementById("root");

if (!elem) {
  throw new Error('no root');
}

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
  const root = (import.meta.hot.data.root ??= createRoot(elem));
  root.render(app);
} else {
  createRoot(elem).render(app);
}
