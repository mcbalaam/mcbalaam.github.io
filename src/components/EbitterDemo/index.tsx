import { t } from "../../../translations/translate";
import "./styles.css";

const WASM_EXEC_URL = "https://mcblm.xyz/ebitter/wasm_exec.js";
const WASM_URL = "https://mcblm.xyz/ebitter/ebitter.wasm";

export function isMobileLayout(): boolean {
  if (typeof window === "undefined") return false;

  const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const hasTouch = navigator.maxTouchPoints > 0;
  const tooSmall =
    window.innerWidth <= 768 || window.innerHeight <= 560;

  return coarsePointer || hasTouch || tooSmall;
}

const DEMO_HTML = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="${WASM_EXEC_URL}"></script>
  <style>html, body { margin: 0; padding: 0; height: 100%; overflow: hidden; background: #000; }</style>
</head>
<body>
<script>
  const go = new Go();
  WebAssembly.instantiateStreaming(fetch("${WASM_URL}"), go.importObject)
    .then((result) => { go.run(result.instance); })
    .catch((err) => {
      document.body.style.color = "#fff";
      document.body.style.padding = "20px";
      document.body.textContent = "Failed to load demo: " + err;
    });
</script>
</body>
</html>`;

export default function EbitterDemo({ mobile }: { mobile: boolean }) {
  if (mobile) {
    return <p className="ebitter-demo-warning">{t("demo_screenTooSmall")}</p>;
  }

  return (
    <div className="ebitter-demo">
      <iframe
        className="ebitter-demo-frame"
        title="ebitter live demo"
        width={640}
        height={480}
        allow="autoplay; gamepad"
        srcDoc={DEMO_HTML}
      />
    </div>
  );
}
