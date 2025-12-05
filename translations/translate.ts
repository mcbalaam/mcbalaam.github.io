import { createTranslator } from "schummar-translate/react";
import en from "./en.ts";
import ru from "./ru.ts";

export const { t, useTranslator, getTranslator, TranslationContextProvider } =
  createTranslator({
    sourceDictionary: en,
    sourceLocale: "en",
    dicts: { en, ru },
  });
