import { createI18n } from "@mcbalaam/to18ml";
import { messages, defaultLocale } from "../locales/generated";
import type { Messages } from "../locales/generated";

export const i18n = createI18n<Messages>({
  locale: defaultLocale,
  messages,
  defaultLocale,
});

export { I18nProvider, useT, useLocale } from "@mcbalaam/to18ml/adapters/react";
export type { Messages };
