import { getTranslator, t } from "./translations/translate";

async function test() {
  // Get translator instance
  const translator = await getTranslator();

  console.log("Testing getTranslator():");
  console.log(
    "translator('sign_placeholder'):",
    translator("sign_placeholder"),
  );
  console.log(
    "typeof translator('sign_placeholder'):",
    typeof translator("sign_placeholder"),
  );
  console.log(
    "translator('sign_placeholder').toString():",
    translator("sign_placeholder").toString(),
  );
  console.log(
    "String(translator('sign_placeholder')):",
    String(translator("sign_placeholder")),
  );
  console.log(
    "`${translator('sign_placeholder')}`:",
    `${translator("sign_placeholder")}`,
  );

  // Try to get raw string value
  const result = translator("sign_placeholder");
  console.log("\nRaw result:", result);

  // Check if it's a function that returns string
  if (typeof result === "function") {
    console.log("Calling result():", result());
  }

  // Check properties
  if (typeof result === "object" && result !== null) {
    console.log("Object properties:");
    for (const key in result) {
      if (result.hasOwnProperty(key)) {
        console.log(`  ${key}:`, result[key]);
      }
    }
  }

  console.log("\n\nTesting t() function structure:");
  console.log("t type:", typeof t);
  console.log("t name:", t.name || "anonymous");

  // Try to see if t has any methods
  console.log("\nChecking t function properties:");
  const tKeys = Object.getOwnPropertyNames(t);
  console.log("t function keys:", tKeys);

  // Try to call t with different approach
  try {
    const tResult = t("sign_placeholder");
    console.log("\nt('sign_placeholder') result type:", typeof tResult);

    // If it's a React element, check its props
    if (tResult && typeof tResult === "object" && "props" in tResult) {
      console.log("React element props:", tResult.props);
      console.log("React element type:", tResult.type);

      // Check if props.children contains the string
      if (tResult.props && tResult.props.children) {
        console.log("props.children:", tResult.props.children);
        console.log("typeof props.children:", typeof tResult.props.children);
      }
    }
  } catch (err) {
    console.log("Error calling t:", err);
  }
}

test().catch(console.error);
