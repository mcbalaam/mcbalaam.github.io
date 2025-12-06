import { t } from "./translations/translate";

console.log("Testing t() function:");
console.log("t('sign_placeholder'):", t("sign_placeholder"));
console.log("typeof t('sign_placeholder'):", typeof t("sign_placeholder"));
console.log("t('sign_placeholder').toString():", t("sign_placeholder").toString());
console.log("String(t('sign_placeholder')):", String(t("sign_placeholder")));
console.log("`${t('sign_placeholder')}`:", `${t("sign_placeholder")}`);
console.log("'' + t('sign_placeholder'):", '' + t("sign_placeholder"));

// Check if it has any properties
const result = t("sign_placeholder");
console.log("Object.keys(result):", Object.keys(result));
console.log("result.constructor.name:", result.constructor.name);

// Try to access potential properties
if (typeof result === 'object' && result !== null) {
  console.log("result.value:", (result as any).value);
  console.log("result.text:", (result as any).text);
  console.log("result.message:", (result as any).message);
}
