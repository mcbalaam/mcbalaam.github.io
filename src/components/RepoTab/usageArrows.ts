import LeaderLine from "leader-line-plus";

const accent = "var(--color-accent)";

export function bindUsageArrows(container: HTMLElement, label: string) {
  const cleanup: (() => void)[] = [];
  for (const source of container.querySelectorAll<HTMLElement>("[data-usage-target]")) {
    const selector = source.dataset.usageTarget;
    const target = selector && document.querySelector(selector);
    if (!target) continue;

    let line: LeaderLine | undefined;

    const show = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      if (!line) {
        // Draw from the destination first, but keep the arrow pointing at it.
        const arrow = new LeaderLine(target, source, {
          hide: true,
          autoPosition: true,
          path: "fluid",
          size: 2.5,
          dash: { len: 6, gap: 5 },
          startPlug: "arrow1",
          endPlug: "behind",
          color: accent,
          middleLabel: LeaderLine.captionLabel(label, {
            color: accent,
            outlineColor: "var(--color-bg-primary)",
            fontFamily: "Geologica, sans-serif",
            fontSize: "13px",
          }),
        });
        arrow.addEventListener("hidden", () => {
          line = undefined;
          arrow.remove();
        });
        line = arrow;
      }
      line.show("draw", { duration: 320 });
    };

    const hide = () => line?.hide("draw", { duration: 250 });

    source.addEventListener("pointerenter", show);
    source.addEventListener("pointerleave", hide);
    cleanup.push(() => {
      source.removeEventListener("pointerenter", show);
      source.removeEventListener("pointerleave", hide);
      line?.remove();
    });
  }

  return () => cleanup.forEach((unbind) => unbind());
}
